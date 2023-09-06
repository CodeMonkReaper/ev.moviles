import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioProfPageRoutingModule } from './inicio-prof-routing.module';

import { InicioProfPage } from './inicio-prof.page';
import { LoginalumPage } from '../loginalum/loginalum.page';
import { LoginalumPageModule } from '../loginalum/loginalum.module';
import { LoginprofPageModule } from '../loginprof/loginprof.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioProfPageRoutingModule,
    LoginprofPageModule,
    ComponentsModule
  ],
  declarations: [InicioProfPage]
})
export class InicioProfPageModule {}
