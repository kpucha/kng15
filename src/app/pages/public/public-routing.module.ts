import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Rutas publicas de la aplicación
 *
 * @type {Routes}
 */
const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'prefix' },
  { path: 'about', component: AboutPage },
  { path: 'blog', component: BlogPage },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
];

/**
 * Declaración del módulo de enrutamiento
 *
 * @export
 * @class PublicRoutingModule
 * @typedef {PublicRoutingModule}
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
