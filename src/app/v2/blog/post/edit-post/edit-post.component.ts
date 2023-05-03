import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/layout.service';
import { Observable } from 'rxjs';
import { Post } from '../post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'kng-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, AfterViewInit {
  private id: string = this.route.snapshot.paramMap.get('id')!;
  draft!: Post;
  ogPost?: Post;

  constructor(
    private layout: LayoutService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  ngAfterViewInit(): void {
    this.layout.setLoading(false);
  }

  private getData() {
    let draft$: Observable<Post> = this.postService.getDraftById(this.id);
    draft$.subscribe((draft: Post) => {
      if (draft) {
        this.draft = draft;
        //SACAR POST ORIGINAL
      } else {
        console.warn('No tenemos draft con id', this.id);
        this.router.navigate(['./blog']);
      }
    });
  }
  private validateDraft(draft: Post) {}
}
