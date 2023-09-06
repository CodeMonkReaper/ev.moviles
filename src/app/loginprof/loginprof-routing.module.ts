import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginprofPage } from './loginprof.page';

const routes: Routes = [
  {
    path: '',
    component: LoginprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginprofPageRoutingModule {}
