import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import { interval, Observable, Subscription } from 'rxjs';
import { Song, Singer } from '../domain';
import { debug } from '../utils/debug.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('audioElement', { static: false })
  audioElement: ElementRef;

  song$: Observable<Song>;

  // song: Song = {
  //   id: '',
  //   rank: 0,
  //   albumId: '',
  //   albumMid: '',
  //   albumPic: '',
  //   albumName: '',
  //   songId: '',
  //   songMid: '',
  //   songName: '',
  //   singers: [],
  //   durationTime: 0,
  //   playInfo: null
  // };

  sda = `http://ws.stream.qqmusic.qq.com/C400000KKcHK4ZYcDo.m4a?fromtag=0&guid=876576457&vkey=35F71C1CFA658235CD4D6BE1BE388CB7B687027B60D7E318E5FDC211D5F11B504F53EDAC8F85AFADE166D6E76D709EF1AA4B8DA55A413EDE`;

  // currentLineWidth = 0;

  interval$: Subscription;
  currentTime = 0; // 单位是秒
  // visiable = true;
  status = 'pause';
  constructor(private store$: Store<fromRoot.State>, private router: Router) {}

  getSingers(singers: Singer[]): string {
    return singers.map(s => s.name).join('/');
  }

  ngOnInit() {
    // this.store$
    //   .pipe(select(fromRoot.getSelectedSong))
    //   .subscribe(val => (this.song = val));

    this.song$ = this.store$.pipe(select(fromRoot.getSelectedSong));

    this.song$.subscribe(val => {
      if (val) {
        this.sda = val.playInfo.url;
        console.log(val);
        console.log(this.sda);
      }
    });
  }

  ngAfterViewInit(): void {
    // console.log(this.audioElement.nativeElement.src);
    const audio = this.audioElement.nativeElement;
    audio.addEventListener(
      'canplay',
      () => {
        console.log('可以播放');
        // 检测到可以播放就直接开始播放
        audio.play();
      },
      false
    );
    // 是否在播放，开始定时器
    audio.addEventListener(
      'play',
      () => {
        console.log('播放中');
        this.status = 'pause';
        this.interval$ = interval(1000).subscribe(val => {
          this.currentTime = Math.floor(audio.currentTime);
          console.log(audio.currentTime);
        });
      },
      false
    );
    // 是否暂停，暂停定时器
    audio.addEventListener(
      'pause',
      () => {
        this.interval$.unsubscribe();
        this.status = 'play';
        console.log('播放暂停');
      },
      false
    );
    // 播放结束
    audio.addEventListener(
      'ended',
      () => {
        this.currentTime = 0;
        console.log('播放结束');
      },
      false
    );
  }

  onSliderChange(value: number): void {
    const audio = this.audioElement.nativeElement;
    audio.pause();
    this.currentTime = value;
  }

  onSliderAfterChange(value: number): void {
    const audio = this.audioElement.nativeElement;
    audio.currentTime = this.currentTime;
    audio.play();
    console.log(`onAfterChange: ${audio.currentTime}`);
  }

  handlerClosePlayer() {
    // this.visiable = false;
    this.router.navigate(['/rank']);
  }

  handlerPlay() {
    const audio = this.audioElement.nativeElement;
    if (this.status === 'play') {
      this.status = 'pause';
      audio.play();
    } else if (this.status === 'pause') {
      this.status = 'play';
      audio.pause();
    }
  }
}
