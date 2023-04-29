import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';
import { Observable } from 'rxjs';
import { Post } from '../post/post.interface';
import { PostService } from '../post/post.service';

@Component({
  selector: 'kng-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private layout: LayoutService) {
    this.posts$ = inject(PostService).getPostList();
  }

  ngOnInit(): void {
    this.layout.setLoading(false);
  }
}
