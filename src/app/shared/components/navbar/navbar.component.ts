import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../../../domain';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: NavBarItem[] = [
    {
      text: '推荐',
      routerLink: '/hot',
      id: 10001
    },
    {
      text: '排行',
      routerLink: '/rank',
      id: 10002
    },
    {
      text: '搜索',
      routerLink: '/search',
      id: 10003
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
