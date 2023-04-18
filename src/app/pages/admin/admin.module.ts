import { AdminRoutingModule } from './admin-routing.module';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard/dashboard.page';
import { EditPostPage } from './edit-post/edit-post.page';
import { EmbedGithubComponent } from './edit-post/embed-github/embed-github.component';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from 'src/app/v2/material/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [DashboardPage, EditPostPage, EmbedGithubComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
    AngularMarkdownEditorModule,
    MaterialModule,
  ],
})
export class AdminModule {}
