import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TranslateModule.forChild(), SharedModule, AuthModule],
  exports: [HeaderComponent],
})
export class LayoutModule {}
