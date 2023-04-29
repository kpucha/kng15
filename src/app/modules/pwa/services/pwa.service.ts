import { EventEmitter, Injectable, Output } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class PwaService {
  @Output() versionChange: EventEmitter<any> = new EventEmitter();

  constructor(private updates: SwUpdate) {}

  checkForUpdate() {
    return this.updates
      .checkForUpdate()
      .then((updateFound) => {
        if (updateFound) {
          alert('A new version is available.');
          document.location.reload();
        }
      })
      .catch((err) => console.error('Failed to check for updates:', err));
  }
}
