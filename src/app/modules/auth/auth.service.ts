import { Injectable } from '@angular/core';

/**
 * Description
 *
 * @export
 * @class AuthService
 * @typedef {AuthService}
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Creates an instance of AuthService.
   *
   * @constructor
   */
  constructor() { }

  /**
   * Description
   *
   * @returns {boolean}
   */
  isAdmin(): boolean {
    return true;
  }
  /**
   * Description
   *
   * @returns {boolean}
   */
  isLoggedIn(): boolean {
    return false;
  }
}
