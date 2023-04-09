import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SignComponent } from './components/sign/sign.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule, SharedModule, TranslateModule],
  exports: [SignComponent],
})
export class AuthModule {}
