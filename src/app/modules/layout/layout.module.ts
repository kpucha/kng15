import { ActionButtonsComponent } from './components/header/action-buttons/action-buttons.component';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuButtonComponent } from './components/header/menu-button/menu-button.component';
import { NavTabsComponent } from './components/header/nav-tabs/nav-tabs.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuButtonComponent,
    NavTabsComponent,
    ActionButtonsComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [CommonModule, TranslateModule.forChild(), SharedModule, AuthModule],
  exports: [HeaderComponent, FooterComponent, SidenavComponent],
})
export class LayoutModule {}
