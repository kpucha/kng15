import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { AngularD3CloudModule } from 'angular-d3-cloud';
import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { NgModule } from '@angular/core';
import { PostInfoCardComponent } from './components/post-info-card/post-info-card.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TranslateModule } from '@ngx-translate/core';
import { WordcloudD3Component } from './components/wordcloud-d3/wordcloud-d3.component';

@NgModule({
  declarations: [
    SwitchComponent,
    MenuButtonComponent,
    ActionButtonsComponent,
    LangSelectorComponent,
    NavTabsComponent,
    WordcloudD3Component,
    PostInfoCardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    TranslateModule.forChild(),
    AngularD3CloudModule,
  ],
  exports: [
    SwitchComponent,
    MenuButtonComponent,
    ActionButtonsComponent,
    LangSelectorComponent,
    NavTabsComponent,
    WordcloudD3Component,
    PostInfoCardComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
