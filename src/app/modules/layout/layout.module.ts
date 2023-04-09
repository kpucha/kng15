import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavSecondaryComponent } from './components/sidenav/sidenav-secondary/sidenav-secondary.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavSecondaryComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SharedModule,
    AuthModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavSecondaryComponent,
  ],
})
export class LayoutModule {}
