import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  RankContainerComponent,
  SearchContainerComponent,
  HotContainerComponent,
  SearchInputComponent
} from './components';

@NgModule({
  declarations: [
    HomeContainerComponent,
    SearchContainerComponent,
    HotContainerComponent,
    RankContainerComponent,
    SearchInputComponent
  ],
  providers: [],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
