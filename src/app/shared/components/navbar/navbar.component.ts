import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input()
  selectedTab = 1;

@Output()
tabSelected =  new EventEmitter<NavBarItem>();

  // selected = 1;
  selected$: Observable<number>;
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.selectedTab);
  }

  handleNavigate(item: NavBarItem) {

    this.tabSelected.emit(item);

    // this.router.navigate(['home', item.link]);
  }
}
