import { Component, OnInit } from '@angular/core';
import { NavBarItem } from '../../../domain';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { debug } from 'src/app/utils/debug.util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: NavBarItem[] = [
    {
      text: '推荐',
      link: 'hot',
      id: 0
    },
    {
      text: '排行',
      link: 'rank',
      id: 1
    },
    {
      text: '搜索',
      link: 'search',
      id: 2
    }
  ];
  // selected = 1;
  selected$: Observable<number>;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selected$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      map((ev: NavigationEnd) => ev.url.split('/')),
      debug('yyyyyyyyyyyyyyyyyyyyy'),
      map(arr => arr[1]),
      map(path => {
        const item = this.items.find(i => i.link === path);
        return item.id;
      })
    );
  }

  handleNavigate(item: NavBarItem) {
    this.router.navigate([item.link]);
  }
}
