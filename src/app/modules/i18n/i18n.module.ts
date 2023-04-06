import { CommonModule } from '@angular/common';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LangSelectorComponent],
  imports: [CommonModule, SharedModule, TranslateModule],
  exports: [LangSelectorComponent],
})
export class I18nModule {}
