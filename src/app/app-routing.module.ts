import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loginprof',
    loadChildren: () => import('./loginprof/loginprof.module').then( m => m.LoginprofPageModule)
  },
  {
    path: 'loginalum',
    loadChildren: () => import('./loginalum/loginalum.module').then( m => m.LoginalumPageModule)
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule)
  },
  {
    path: 'inicio-prof',
    loadChildren: () => import('./inicio-prof/inicio-prof.module').then( m => m.InicioProfPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
