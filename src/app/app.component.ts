import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { debug } from './utils/debug.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd),
        debug('router:88888888888')
        // takeUntil(this.componentDestroyed$)
      )
      .subscribe();
  }
}
