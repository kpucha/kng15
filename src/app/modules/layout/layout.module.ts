import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './components/switch/switch.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SwitchComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule.forChild(),
    MatSidenavModule,
  ],
  exports: [SwitchComponent, MatSidenavModule, MatIconModule],
})
export class LayoutModule {}
