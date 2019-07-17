import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song, Singer } from '../../domain';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  topSongListItem: Song;

  @Output()
  selectSong = new EventEmitter<Song>();

  constructor() {}

  ngOnInit() {
    // console.log(this.topSongListItem);
  }

  onSelectSong() {
    this.selectSong.emit(this.topSongListItem);
  }

  public get singers(): string {
    if (this.topSongListItem.singers != null) {
      return this.topSongListItem.singers.map(s => s.name).join('/');
    }
    return '';
  }
}
