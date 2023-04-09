import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { LayoutService } from './modules/layout/layout.service';
import { LayoutSize } from './interfaces/layout-size.interface';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

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
export class AppComponent implements OnDestroy {
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
  constructor(public layout: LayoutService) {
    this.layoutSize = layout.currentLayoutSize;
    this.sidenavOpened = layout.isSidenavOpen;
    this.isLoading = layout.isLoading;
    layout.sizeChange.subscribe((s) => (this.layoutSize = s));
    layout.sidenavChange.subscribe((o) => (this.sidenavOpened = o));
    layout.loadingChange.subscribe((l) => (this.isLoading = l));
  }

  ngOnDestroy(): void {
    this.layout.sizeChange.unsubscribe();
    this.layout.sidenavChange.unsubscribe();
    this.layout.loadingChange.unsubscribe();
  }
}
