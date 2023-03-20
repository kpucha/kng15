import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import { LayoutModule } from '../../modules/layout/layout.module';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  declarations: [HomePage, AboutPage, BlogPage],
  imports: [CommonModule, PublicRoutingModule, LayoutModule, SharedModule],
})
export class PublicModule {}
