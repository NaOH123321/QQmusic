import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';
import { debug } from '../../../utils/debug.util';
import { NavBarItem } from 'src/app/domain';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, OnDestroy {
  componentDestroyed$: Subject<void> = new Subject();
  selectedIndex$: Observable<number>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.firstChild.url
      .pipe(
        debug('activatedRoute:events'),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe();

    this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd),
        debug('router:tttt'),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe();

    // this.selectedIndex$ = this.router.events.pipe(
    //   debug('router:events'),
    //   filter(ev => ev instanceof NavigationEnd),
    //   debug('tttt'),
    //   map((ev: NavigationEnd) => {
    //     const arr = ev.url.split('/');
    //     return arr.length > 2 ? arr[2] : 'hot';
    //   }),
    //   debug('sssssssssssssssssssssss'),
    //   map(path => this.getSelectedIndex(path))
    // );
    // this.selectedIndex$.subscribe(val =>
    //   console.log('nnnnnnnnnnnnnnnnnnnn' + val)
    // );
  }

  getSelectedIndex(tab: string) {
    return tab === 'hot' ? 0 : tab === 'search' ? 2 : 1;
  }

  handleNavigate(item: NavBarItem) {
    this.router.navigate(['home', item.link]);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
