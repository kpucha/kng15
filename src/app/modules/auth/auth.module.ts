import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/v2/material/material.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SignComponent } from './components/sign/sign.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule, SharedModule, TranslateModule, MaterialModule],
  exports: [SignComponent],
})
export class AuthModule {}
