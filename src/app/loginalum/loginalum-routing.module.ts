import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginalumPage } from './loginalum.page';

const routes: Routes = [
  {
    path: '',
    component: LoginalumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginalumPageRoutingModule {}
