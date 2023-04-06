import { ActionButtonsComponent } from './components/header/action-buttons/action-buttons.component';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { I18nModule } from '../i18n/i18n.module';
import { MenuButtonComponent } from './components/header/menu-button/menu-button.component';
import { NavTabsComponent } from './components/header/nav-tabs/nav-tabs.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavSecondaryComponent } from './components/sidenav/sidenav-secondary/sidenav-secondary.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuButtonComponent,
    NavTabsComponent,
    ActionButtonsComponent,
    FooterComponent,
    SidenavComponent,
    SidenavSecondaryComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    SharedModule,
    AuthModule,
    I18nModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SidenavSecondaryComponent,
    ActionButtonsComponent,
    NavTabsComponent,
  ],
})
export class LayoutModule {}
