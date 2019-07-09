import { Component, OnInit, Input } from '@angular/core';
import { TopSongItem } from '../../domain';
import { Route, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  topSongListItem: TopSongItem;
  @Input()
  rank: number;
  constructor(private router: Router) {}

  ngOnInit() {}

  openPlayer() {
    this.router.navigateByUrl('/player');
  }
}
