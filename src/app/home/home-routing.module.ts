import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeContainerComponent,
  HotContainerComponent,
  RankContainerComponent,
  SearchContainerComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: 'hot',
        component: HotContainerComponent
      },
      {
        path: 'rank',
        component: RankContainerComponent
      },
      {
        path: 'search',
        component: SearchContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
