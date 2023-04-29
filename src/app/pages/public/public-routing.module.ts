import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';
import { Component, NgModule } from '@angular/core';
import { CookiesPolicyPage } from './cookies-policy/cookies-policy.page';
import { HomePage } from './home/home.page';
import { PostPage } from './post/post.page';
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.page';
import { RouterModule, Routes } from '@angular/router';

/**
 * Rutas publicas de la aplicación
 *
 * @type {Routes}
 */
const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'prefix' },
  { path: 'about', component: AboutPage },
  { path: 'home', component: HomePage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
  { path: 'cookies-policy', component: CookiesPolicyPage },
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
