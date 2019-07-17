import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './song.effect';

@NgModule({
  imports: [EffectsModule.forRoot([SongEffects])]
})
export class AppEffectsModule {}
