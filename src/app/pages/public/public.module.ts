import { AboutPage } from './about/about.page';
import { AdsModule } from 'src/app/modules/ads/ads.module';
import { BlogPage } from './blog/blog.page';
import { BrainTagsComponent } from './about/components/brain-tags/brain-tags.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './about/components/contact/contact.component';
import { CookiesPolicyPage } from './cookies-policy/cookies-policy.page';
import { DashInfoComponent } from './about/components/dash-info/dash-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GitgraphCvComponent } from './about/components/gitgraph-cv/gitgraph-cv.component';
import { HomePage } from './home/home.page';
import { LayoutModule } from '../../modules/layout/layout.module';
import { MaterialModule } from 'src/app/v2/material/material.module';
import { NgModule } from '@angular/core';
import { PostPage } from './post/post.page';
import { PrivacyPolicyPage } from './privacy-policy/privacy-policy.page';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { StudyHistComponent } from './about/components/study-hist/study-hist.component';
import { TranslateModule } from '@ngx-translate/core';
import { WorkHistComponent } from './about/components/work-hist/work-hist.component';

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
    PostPage,
    PrivacyPolicyPage,
    CookiesPolicyPage,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule,
    AdsModule,
    SharedModule,
    TranslateModule.forChild(),
    FontAwesomeModule,
    MaterialModule,
  ],
})
export class PublicModule {}
