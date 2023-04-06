import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';
import { BrainTagsComponent } from './about/components/brain-tags/brain-tags.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './about/components/contact/contact.component';
import { DashInfoComponent } from './about/components/dash-info/dash-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GitgraphCvComponent } from './about/components/gitgraph-cv/gitgraph-cv.component';
import { HomePage } from './home/home.page';
import { LayoutModule } from '../../modules/layout/layout.module';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { StudyHistComponent } from './about/components/study-hist/study-hist.component';
import { TranslateModule } from '@ngx-translate/core';
import { WorkHistComponent } from './about/components/work-hist/work-hist.component';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [
    HomePage,
    AboutPage,
    BlogPage,
    GitgraphCvComponent,
    DashInfoComponent,
    StudyHistComponent,
    WorkHistComponent,
    ContactComponent,
    BrainTagsComponent,
    LoginPage,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule,
    SharedModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
  ],
})
export class PublicModule {}
