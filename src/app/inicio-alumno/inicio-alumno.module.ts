import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAlumnoPageRoutingModule } from './inicio-alumno-routing.module';

import { InicioAlumnoPage } from './inicio-alumno.page';
import { LoginalumPage } from '../loginalum/loginalum.page';
import { LoginalumPageModule } from '../loginalum/loginalum.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAlumnoPageRoutingModule,
    ReactiveFormsModule,
    LoginalumPageModule,
    ComponentsModule
  ],
  declarations: [InicioAlumnoPage]
})
export class InicioAlumnoPageModule {}
