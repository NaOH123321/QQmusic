import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopListComponent } from './top-list/top-list.component';

const routes: Routes = [
  {
    path: '',
    component: TopListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankRoutingModule {}
