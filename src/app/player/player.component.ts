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
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('audioElement', { static: true })
  audioElement: ElementRef;

  asda = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${'000DMpJ73yeITP'}.jpg`;

  reer = `http://ws.stream.qqmusic.qq.com/${'C400003iHc0e2UIgMC'}.m4a?fromtag=0&guid=126548448&vkey=`;

  vkey = `386B45DFED30BE04715545E6B5EBE1A7F9FB5F9824ED6FB490669563FE456FD54094ED906EE931139262D1025C018402B08A31ABBA03F39E`;

  data = {
    coverUrl: this.asda,
    name: '木偶人',
    alia: '薛之谦',
    durationTime: 286,
    src: this.reer + this.vkey
  };
  // prefix = '?param=400y400&quality=100';
  // currentLineWidth = 0;

  interval$: Subscription;
  currentTime = 0; // 单位是秒
  visiable = true;
  status = 'pause';
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
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
    this.visiable = false;
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
