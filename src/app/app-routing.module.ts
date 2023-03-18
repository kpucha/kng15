import { AuthService } from './modules/auth/auth.service';
import { inject, NgModule } from '@angular/core';
import { IsAdminGuard } from './modules/auth/guards/is-admin.guard';
import { RouterModule, Routes } from '@angular/router';

/**
 * Lazy Load de las rutas de los módulos
 *
 * @type {Routes}
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
];

/**
 * Declaración del módulo
 *
 * @export
 * @class AppRoutingModule
 * @typedef {AppRoutingModule}
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
