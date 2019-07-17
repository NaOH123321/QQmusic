import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components';
import { TopListComponent } from './components/rank';
import { HotListComponent } from './components/hot/hot-list/hot-list.component';
import { SearchListComponent } from './components/search/search-list/search-list.component';

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
        component: HotListComponent
      },
      {
        path: 'rank',
        component: TopListComponent
      },
      {
        path: 'search',
        component: SearchListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
