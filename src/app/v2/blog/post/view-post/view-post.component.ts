import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../../modules/layout/layout.service';
import { MarkdownService } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { Post } from '../post.interface';
import { PostService } from '../post.service';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

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
  private markdownService: MarkdownService = inject(MarkdownService);
  public previewContent: string = '';

  slug!: string;
  post!: Post;
  posts$!: Observable<Post[]>;

  constructor(
    private layout: LayoutService,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.route.params.subscribe((newParams) => {
      this.slug = newParams['slug'];
      this.posts$ = this.postService.getPostBySlug(this.slug);
      this.posts$.subscribe((posts: Post[]) => {
        this.validatePost(posts);
      });
    });
  }

  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }

  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
  }

  getMarked(val: any) {
    return val;
  }

  private validatePost(posts: Post[]) {
    switch (posts.length) {
      case 0:
        console.warn('No tenemos post con slug', this.slug);
        this.router.navigate(['./blog']);
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
