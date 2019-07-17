import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'rank',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./rank/rank.module').then(m => m.RankModule)
  // },
  // {
  //   path: 'hot',
  //   loadChildren: () => import('./hot/hot.module').then(m => m.HotModule)
  // },
  // {
  //   path: 'search',
  //   pathMatch: 'full',
  //   loadChildren: () =>
  //     import('./search/search.module').then(m => m.SearchModule)
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'player',
    pathMatch: 'full',
    loadChildren: () =>
      import('./player/player.module').then(m => m.PlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
