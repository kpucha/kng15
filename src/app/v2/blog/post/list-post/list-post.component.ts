import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { LayoutService } from '../../../../modules/layout/layout.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  posts$!: Observable<Post[]>;

  constructor(private layout: LayoutService) {
    this.posts$ = inject(PostService).getPostList();
    this.layout.setLoading(false);
  }

  view(id: string) {
    //TODO go to the post url passing the post to the component
  }

  getColor(i: number) {
    while (i > 2) {
      i -= 3;
    }
    return this.colors[i];
  }

  private colors: string[] = ['accent', 'warn', 'default'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['title'];
}
