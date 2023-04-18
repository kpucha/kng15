import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post.interface';
import { POST } from '../post.constants';
import { PostService } from '../post.service';

/**
 * Retrieve & list a list of Posts from firestore
 *
 * @export
 * @class ListPostComponent
 * @typedef {ListPostComponent}
 */
@Component({
  selector: 'kng-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent {
  /**
   * List of Post to view
   *
   * @type {!Observable<Post[]>}
   */
  posts$!: Observable<Post[]>;
  /**
   * Creates an instance of ListPostComponent.
   *
   * @constructor
   */
  constructor() {
    this.posts$ = inject(PostService).getPostList();
  }
}
