import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ScrollComponent } from './scroll/scroll.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ScrollComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgZorroAntdModule,

    ScrollComponent
  ]
})
export class SharedModule {}
