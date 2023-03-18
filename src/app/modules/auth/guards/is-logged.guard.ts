import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
  } from '@angular/router';
import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Description
 *
 * @export
 * @class IsLoggedGuard
 * @typedef {IsLoggedGuard}
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  /**
   * Creates an instance of IsLoggedGuard.
   *
   * @constructor
   * @param {AuthService} authService
   * @param {Router} router
   */
  constructor(public authService: AuthService, public router: Router) {}

  /**
   * Description
   *
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isLoggedIn: boolean = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigate(['/']);
    }
    return true;
  }
}
