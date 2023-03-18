import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';


@NgModule({
  declarations: [
    HomePage,
    AboutPage,
    BlogPage
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
