import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';

@Component({
  selector: 'kng-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit, AfterViewInit {
  constructor(private layout: LayoutService) {}
  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
  }
  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }
}
