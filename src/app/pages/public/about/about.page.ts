import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';

@Component({
  selector: 'kng-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit, AfterViewInit {
  constructor(private layout: LayoutService) {}
  ngOnInit(): void {
    this.layout.setActiveLink('/about');
  }
  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }
}
