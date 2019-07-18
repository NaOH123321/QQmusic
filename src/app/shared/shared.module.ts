import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {
  ScrollComponent,
  NavbarComponent,
  ListItemComponent
} from './components';
import { FormatDatePipe } from './pipes';

@NgModule({
  declarations: [
    FormatDatePipe,
    ScrollComponent,
    NavbarComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,

    ScrollComponent,
    NavbarComponent,
    ListItemComponent,

    FormatDatePipe
  ],
  entryComponents: []
})
export class SharedModule {}
