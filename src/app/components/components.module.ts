import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [HeaderComponent,BodyComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent,BodyComponent]
})
export class ComponentsModule { }
