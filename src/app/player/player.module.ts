import { NgModule } from '@angular/core';

import { PlayerRoutingModule } from './player-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [PlayerComponent],
  imports: [SharedModule, PlayerRoutingModule]
})
export class PlayerModule {}
