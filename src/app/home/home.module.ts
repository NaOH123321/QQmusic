import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components';
import { TopListComponent, ListItemComponent } from './components/rank';
import { SearchListComponent } from './components/search/search-list/search-list.component';
import { HotListComponent } from './components/hot/hot-list/hot-list.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    SearchListComponent,
    HotListComponent,
    TopListComponent,
    ListItemComponent
  ],
  providers: [],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
