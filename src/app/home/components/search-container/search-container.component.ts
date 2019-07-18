import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/domain';
import { SongService } from '../../../services/song.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import { Router } from '@angular/router';
import { loadAllSuccess, select } from 'src/app/store/actions';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  update = false;
  pullUpLoad = false;

  songList: Song[] = [];

  pageIndex = 0;
  pageSize = 10;
  pageCount = 1;

  constructor(
    private router: Router,
    private service: SongService,
    private store$: Store<fromRoot.State>
  ) {}

  ngOnInit() {}

  search() {
    this.getSongs(true);
    this.pullUpLoad = true;
  }

  getSongs(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 0;
    }

    this.update = false;
    this.service
      .getAllBySearch({
        pageIndex: this.pageIndex++,
        keywords: '周杰伦'
      })
      .subscribe(data => {
        this.update = true;
        this.pageCount = data.pagination.pageCount;
        if (reset) {
          this.songList = [];
        }
        this.songList = [...this.songList, ...(data.array as Song[])];

        this.store$.dispatch(
          loadAllSuccess({
            payload: {
              array: this.songList
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
