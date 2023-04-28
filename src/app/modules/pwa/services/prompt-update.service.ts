import { filter } from 'rxjs';
import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe((evt) => {
        //if (promptUser(evt)) {
        promptUser(evt);
        // Reload the page to update to the latest version.
        document.location.reload();
        // }
      });
  }
}
function promptUser(evt: VersionReadyEvent) {
  alert('NEW VERSION');
}
