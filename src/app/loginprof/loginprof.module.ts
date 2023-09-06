import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginprofPageRoutingModule } from './loginprof-routing.module';

import { LoginprofPage } from './loginprof.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginprofPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginprofPage],
  exports:[LoginprofPage],
})
export class LoginprofPageModule {}
