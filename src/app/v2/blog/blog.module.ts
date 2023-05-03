import { AdsModule } from '../../modules/ads/ads.module';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { ListPostComponent } from './post/list-post/list-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { PostPresentationComponent } from './post/post-presentation/post-presentation.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ViewPostComponent } from './post/view-post/view-post.component';

@NgModule({
  declarations: [
    CreatePostComponent,
    ViewPostComponent,
    ListPostComponent,
    EditPostComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    AdsModule,
    SharedModule,
    TranslateModule,
    PostPresentationComponent,
  ],
  exports: [],
})
export class BlogModule {}
