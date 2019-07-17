import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components';

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
    //   {
    //     path: 'hot',
    //     component: HomeDetailComponent
    //   },
    //   {
    //     path: 'rank',
    //     component: HomeDetailComponent
    //   },
    //   {
    //     path: ':tabLink',
    //     component: HomeDetailComponent
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
