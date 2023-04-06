import { AfterViewInit, Component } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';

@Component({
  selector: 'kng-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements AfterViewInit {
  constructor(private layout: LayoutService) {}
  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }
}
