import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rank',
    pathMatch: 'full'
  },
  {
    path: 'rank',
    pathMatch: 'full',
    loadChildren: () => import('./rank/rank.module').then(m => m.RankModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
