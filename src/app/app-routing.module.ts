import { AuthService } from './modules/auth/auth.service';
import { inject, NgModule } from '@angular/core';
import { IsAdminGuard } from './modules/auth/guards/is-admin.guard';
import { RouterModule, Routes } from '@angular/router';
import { V2Module } from './v2/v2.module';

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
    path: 'v2',
    loadChildren: () => import('./v2/v2.module').then((m) => m.V2Module),
  },
  {
    path: 'admin',
    canActivate: [IsAdminGuard],
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '' },
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
