import { AdsHorizontalComponent } from './components/ads-horizontal/ads-horizontal.component';
import { AdsSkyscraperComponent } from './components/ads-skyscraper/ads-skyscraper.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdsHorizontalComponent, AdsSkyscraperComponent],
  imports: [CommonModule, SharedModule],
  exports: [AdsHorizontalComponent, AdsSkyscraperComponent],
})
export class AdsModule {}
