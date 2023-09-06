import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioProfPage } from './inicio-prof.page';

const routes: Routes = [
  {
    path: '',
    component: InicioProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioProfPageRoutingModule {}
