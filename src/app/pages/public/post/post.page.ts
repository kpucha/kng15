import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../modules/layout/layout.service';
import { POST } from 'src/app/v2/blog/post/post.constants';
import { Post } from 'src/app/v2/blog/post/post.interface';

@Component({
  selector: 'kng-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  public slug = this.route.snapshot.paramMap.get('slug')!;
  public post: Post = this.getPost();

  constructor(private route: ActivatedRoute, private layout: LayoutService) {}

  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
    this.layout.setLoading(false);
  }

  getPost(): Post {
    return POST.MOCK_POST;
  }
}
