import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../modules/layout/layout.service';

@Component({
  selector: 'kng-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  constructor(private route: ActivatedRoute, private layout: LayoutService) {}
  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
    this.layout.setLoading(false);
  }
  public slug = this.route.snapshot.paramMap.get('slug')!;
}
