import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './post/view-post/view-post.component';

const routes: Routes = [
  {
    path: '',
    component: ListPostComponent,
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
  {
    path: ':slug',
    component: ViewPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
