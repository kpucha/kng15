import { BreakpointObserver } from '@angular/cdk/layout';
import { EventEmitter, Injectable, OnDestroy, Output } from '@angular/core';
import { LayoutSize } from '../../interfaces/layout-size.interface';
import { Observable, Subject, takeUntil } from 'rxjs';

/**
 * Description
 *
 * @export
 * @class LayoutService
 * @typedef {LayoutService}
 * @implements {OnDestroy}
 */
@Injectable({
  providedIn: 'root',
})
export class LayoutService implements OnDestroy {
  /**
   * Array con los tamaños de pantallas
   *
   * @type {string[]}
   */
  sizes: string[] = [
    '(max-width: 1279px)', //S (<1280)
    '(min-width: 1280px) and (max-width: 1919px)', //M  (>=1280)
    '(min-width: 1920px) and (max-width: 2559px)', //L  (>=FULLHD)
    '(min-width: 2560px) and (max-width: 3839px)', //XL (>=2K)
    '(min-width: 3840px)', //XXL  (>=4K)
  ];
  /**
   * Subject para ver si se destruye
   *
   * @type {*}
   */
  destroyed = new Subject<void>();

  /**
   * Description
   *
   * @type {LayoutSize}
   */
  currentLayoutSize: LayoutSize = {} as LayoutSize;
  currentActiveLink: string = '';
  isSidenavOpen: boolean = false;
  isLoading: boolean = true;
  /**
   * Emite los nuevos tamaños si hay cambios
   *
   * @type {EventEmitter<LayoutSize>}
   */
  @Output() sizeChange: EventEmitter<LayoutSize> = new EventEmitter();
  @Output() sidenavChange: EventEmitter<boolean> = new EventEmitter();
  @Output() loadingChange: EventEmitter<boolean> = new EventEmitter();
  @Output() activeLinkChange: EventEmitter<string> = new EventEmitter();

  /**
   * Creates an instance of LayoutService.
   *
   * @constructor
   * @param {BreakpointObserver} breakpointObserver
   */
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe(this.sizes)
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        this.currentLayoutSize = {
          isS: result.breakpoints[this.sizes[0]],
          isM: result.breakpoints[this.sizes[1]],
          isL: result.breakpoints[this.sizes[2]],
          isXL: result.breakpoints[this.sizes[3]],
          isXXL: result.breakpoints[this.sizes[4]],
        };
        this.sizeChange.emit(this.currentLayoutSize);
      });
  }

  /**
   * Ejecución cuando se destruya el servicio
   */
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  /**
   * Return the opened state of the main sidenav
   * @returns Observable<boolean>
   */
  public sidenavOpened(): boolean {
    return this.isSidenavOpen;
  }
  /**
   * Open the main sidenav
   */
  public openSidenav(): void {
    this.isSidenavOpen = true;
    this.sidenavChange.emit(this.isSidenavOpen);
  }
  /**
   * Close the main sidenav
   */
  public closeSidenav(): void {
    this.isSidenavOpen = false;
    this.sidenavChange.emit(this.isSidenavOpen);
  }
  /**
   * Open the main sidenav
   */
  public setLoading(state: boolean): void {
    this.isLoading = state;
    this.loadingChange.emit(this.isLoading);
  }

  public setActiveLink(link: string): void {
    this.currentActiveLink = link;
    this.activeLinkChange.emit(this.currentActiveLink);
  }
}
