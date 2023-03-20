import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginButtonComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoginButtonComponent],
})
export class AuthModule {}
