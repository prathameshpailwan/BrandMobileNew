import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileTypeComponent } from '../main/master/mobile-type/mobile-type.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class SharedModule {}

