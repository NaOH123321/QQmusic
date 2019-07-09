import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ScrollComponent, NavbarComponent } from './components';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ScrollComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgZorroAntdModule,

    ScrollComponent,
    NavbarComponent
  ],
  entryComponents: []
})
export class SharedModule {}
