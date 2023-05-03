import { BlogModule } from './blog/blog.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { V2RoutingModule } from './v2-routing.module';
import { DocViewerComponent } from './doc/doc-viewer/doc-viewer.component';

@NgModule({
  declarations: [
    DocViewerComponent
  ],
  imports: [CommonModule, V2RoutingModule, BlogModule],
})
export class V2Module {}
