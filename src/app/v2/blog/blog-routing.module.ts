import { BlogComponent } from './blog/blog.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { IsAdminGuard } from 'src/app/modules/auth/guards/is-admin.guard';
import { ListPostComponent } from './post/list-post/list-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './post/view-post/view-post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'create',
    canActivate: [IsAdminGuard],
    component: CreatePostComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [IsAdminGuard],
    component: EditPostComponent,
  },
  {
    path: 'post/:slug',
    component: ViewPostComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
