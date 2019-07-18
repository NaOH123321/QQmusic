import { Component, OnInit } from '@angular/core';
import { Song } from '../../../domain';
import { SongService } from '../../../services/song.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import { loadAll, select, loadAllSuccess } from '../../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank-container',
  templateUrl: './rank-container.component.html',
  styleUrls: ['./rank-container.component.scss']
})
export class RankContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private service: SongService,
    private store$: Store<fromRoot.State>
  ) {}

  topSongList: Song[] = [];

  pageIndex = 0;
  pageSize = 10;
  pageCount = 1;

  update = false;
  pullDownRefresh = true;
  pullUpLoad = true;

  ngOnInit() {
    this.getSongs(true);
  }

  getSongs(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 0;
    }

    this.update = false;

    // this.store$.dispatch(
    //   loadAll({
    //     payload: {
    //       pageIndex: 0,
    //       pageSize: this.pageSize
    //     }
    //   })
    // );

    this.service
      .getAll({
        pageIndex: this.pageIndex++,
        pageSize: this.pageSize
      })
      .subscribe(data => {
        this.update = true;
        this.pageCount = data.pagination.pageCount;
        if (reset) {
          this.topSongList = [];
        }
        this.topSongList = [...this.topSongList, ...(data.array as Song[])];

        this.store$.dispatch(
          loadAllSuccess({
            payload: {
              array: this.topSongList
            }
          })
        );
      });
  }

  pullingUp(): void {
    if (this.pageIndex >= this.pageCount) {
      this.pullUpLoad = false;
      return;
    }
    this.getSongs();

    // this.update = false;
    // setTimeout(() => {
    //   this.topSongList.push({
    //     id: 1,
    //     picUrl: '',
    //     name: '撒的发' + this.i,
    //     singer: '撒的发' + this.i,
    //     durationTime: 86846
    //   });
    //   this.i++;
    //   this.update = true;

    //   if (this.i === 5) {
    //     this.pullUpLoad = false;
    //   }
    //   console.log('sssssssssssss');
    // }, 1000);
  }

  pullingDown(): void {
    this.pullUpLoad = true;
    this.getSongs(true);

    // this.update = false;
    // setTimeout(() => {
    //   this.topSongList = [];
    //   this.topSongList = this.topSongListInit;
    //   this.update = true;
    //   console.log('rrrrrrrrrrrrrrr');
    // }, 3000);
  }

  handleSelectSong(song: Song) {
    if (song.playInfo.vkey != null && song.playInfo.vkey !== '') {
      this.store$.dispatch(
        select({
          payload: song.songId
        })
      );
      this.router.navigate(['/player']);
    } else {
      console.log('不能播放');
    }
  }
}
