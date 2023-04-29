import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../../../../modules/layout/layout.service';
import { MarkdownService } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { Post } from '../post.interface';
import { PostService } from '../post.service';

/**
 * Retrieve & show a Post document from Firestore by a given slug
 *
 * @export
 * @class ViewPostComponent
 * @typedef {ViewPostComponent}
 */
@Component({
  selector: 'kng-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit, AfterViewInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private postService: PostService = inject(PostService);
  private markdownService: MarkdownService = inject(MarkdownService);
  public previewContent: string = '';

  private slug: string = this.route.snapshot.paramMap.get('slug')!;
  post!: Post;

  constructor(private layout: LayoutService) {}

  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }

  ngOnInit(): void {
    let posts$: Observable<Post[]> = this.postService.getPostBySlug(this.slug);
    posts$.subscribe((posts: Post[]) => {
      this.validatePost(posts);
    });
  }

  getMarked(val: any) {
    return val;
  }

  private validatePost(posts: Post[]) {
    switch (posts.length) {
      case 0:
        console.warn('No tenemos post con slug', this.slug);
        this.router.navigate(['list-post']);
        break;
      case 1:
        this.post = posts[0];
        this.previewContent = this.post.content.replaceAll('\\n', '\n');
        break;
      default:
        throw new Error('TENEMOS POST DE MAS con slug :' + this.slug);
    }
  }
}
