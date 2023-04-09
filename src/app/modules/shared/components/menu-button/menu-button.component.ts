import { Component } from '@angular/core';
import { LayoutService } from '../../../layout/layout.service';

@Component({
  selector: 'kng-menu-button',
  templateUrl: './menu-button.component.html',
})
export class MenuButtonComponent {
  isSidenavOpen: boolean = true;
  constructor(public layoutService: LayoutService) {
    this.isSidenavOpen = layoutService.sidenavOpened();
    layoutService.sidenavChange.subscribe((res) => (this.isSidenavOpen = res));
  }
}
