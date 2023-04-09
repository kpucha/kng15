import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';

@Component({
  selector: 'kng-cookies-policy',
  templateUrl: './cookies-policy.page.html',
  styleUrls: ['./cookies-policy.page.scss'],
})
export class CookiesPolicyPage implements OnInit {
  constructor(private layout: LayoutService) {}
  ngOnInit(): void {
    this.layout.setActiveLink('/about');
    this.layout.setLoading(false);
  }
}
