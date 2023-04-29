import { LayoutService } from './modules/layout/layout.service';
import { LayoutSize } from './interfaces/layout-size.interface';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { PwaService } from './modules/pwa/services/pwa.service';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

/**
 * Description
 *
 * @export
 * @class AppComponent
 * @typedef {AppComponent}
 */
@Component({
  selector: 'kng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } },
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * Description
   *
   * @type {LayoutSize}
   */
  layoutSize: LayoutSize = {} as LayoutSize;
  sidenavOpened: boolean = false;
  isLoading: boolean = true;

  /**
   * Creates an instance of AppComponent.
   *
   * @constructor
   * @param {LayoutService} layout
   */
  constructor(public layout: LayoutService, private pwa: PwaService) {
    this.layoutSize = layout.currentLayoutSize;
    this.sidenavOpened = layout.isSidenavOpen;
    this.isLoading = layout.isLoading;
  }

  ngOnInit(): void {
    this.layout.sizeChange.subscribe((s) => (this.layoutSize = s));
    this.layout.sidenavChange.subscribe((o) => (this.sidenavOpened = o));
    this.layout.loadingChange.subscribe((l) => (this.isLoading = l));
    this.pwa.checkForUpdate();
  }

  ngOnDestroy(): void {
    this.layout.sizeChange.unsubscribe();
    this.layout.sidenavChange.unsubscribe();
    this.layout.loadingChange.unsubscribe();
  }
}
