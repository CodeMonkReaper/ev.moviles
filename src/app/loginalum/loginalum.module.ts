import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginalumPageRoutingModule } from './loginalum-routing.module';

import { LoginalumPage } from './loginalum.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginalumPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginalumPage],
  exports:[LoginalumPage]
})
export class LoginalumPageModule {}
