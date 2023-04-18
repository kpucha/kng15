import { DashboardPage } from './dashboard/dashboard.page';
import { EditPostPage } from './edit-post/edit-post.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'edit/post', component: EditPostPage },
  { path: 'edit/post/:slug', component: EditPostPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
