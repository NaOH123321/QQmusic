import { NgModule } from '@angular/core';
import { TopListComponent } from './top-list/top-list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RankRoutingModule } from './rank-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TopListComponent, ListItemComponent],
  imports: [RankRoutingModule, SharedModule]
})
export class RankModule {}
