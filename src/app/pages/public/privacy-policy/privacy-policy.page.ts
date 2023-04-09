import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';

@Component({
  selector: 'kng-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  constructor(private layout: LayoutService) {}
  ngOnInit(): void {
    this.layout.setActiveLink('/about');
    this.layout.setLoading(false);
  }
}
