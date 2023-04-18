import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../../v2/material/material.module';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { NgModule } from '@angular/core';
import { PostInfoCardComponent } from './components/post-info-card/post-info-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwitchComponent } from './components/switch/switch.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SwitchComponent,
    MenuButtonComponent,
    ActionButtonsComponent,
    LangSelectorComponent,
    NavTabsComponent,
    PostInfoCardComponent,
  ],
  imports: [
    MarkdownModule,
    AngularMarkdownEditorModule.forRoot(),
    CommonModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    MarkdownModule,
    AngularMarkdownEditorModule,
    SwitchComponent,
    MenuButtonComponent,
    ActionButtonsComponent,
    LangSelectorComponent,
    NavTabsComponent,
    PostInfoCardComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
