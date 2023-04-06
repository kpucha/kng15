import { Component, Input } from '@angular/core';
import { LayoutSize } from '../../../../interfaces/layout-size.interface';

@Component({
  selector: 'kng-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() layoutSize!: LayoutSize;
}
