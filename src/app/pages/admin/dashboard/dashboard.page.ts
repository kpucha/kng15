import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';

@Component({
  selector: 'kng-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, AfterViewInit {
  constructor(private layout: LayoutService) {}
  ngOnInit(): void {
    this.layout.setActiveLink('/admin');
  }
  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }
}
