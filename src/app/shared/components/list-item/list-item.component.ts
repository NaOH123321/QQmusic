import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  HostBinding
} from '@angular/core';
import { Song, Singer } from '../../../domain';
import { cardAnim } from 'src/app/anim';

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

  @Input()
  isShowRank = true;

  itemDisplayStyle = '1px 1px 1px 1px #f3f3f3';
  constructor() {}

  ngOnInit() {
    if (this.topSongListItem.playInfo.vkey === '') {
      this.itemDisplayStyle = '0px #f3f3f3';
    }
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
