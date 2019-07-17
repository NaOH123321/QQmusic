import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { debug } from '../../../utils/debug.util';
import { NavBarItem } from 'src/app/domain';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  selected$: Observable<number>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.selected$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
      debug("tttt"),
      map((ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 2 ? arr[2] : 'hot';
      }),
      debug("sssssssssssssssssssssss"),
      map(path => this.getSelectedIndex(path))
    );
    this.selected$ .subscribe(val=>console.log("nnnnnnnnnnnnnnnnnnnn"+val));
  }

  getSelectedIndex(tab: string) {
    return tab === 'hot'
      ? 0
      : tab === 'search'
      ? 2
      : 1;
  }

  handleNavigate(item: NavBarItem) {
    this.router.navigate(['home', item.link]);
  }
}
