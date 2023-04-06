import { AfterViewInit, Component, inject } from '@angular/core';
import { LayoutService } from '../../../modules/layout/layout.service';

@Component({
  selector: 'kng-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  constructor(private layout: LayoutService) {}
  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }
}
