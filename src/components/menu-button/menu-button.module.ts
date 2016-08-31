import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SohoIconModule } from '../icon/icon.module';
import { SohoMenuButtonComponent } from './menu-button.component';

@NgModule({
  imports: [
    CommonModule,
    SohoIconModule
  ],
  declarations: [
    SohoMenuButtonComponent
  ],
  exports: [
    SohoMenuButtonComponent
  ]
})
export class SohoMenuButtonModule {}
