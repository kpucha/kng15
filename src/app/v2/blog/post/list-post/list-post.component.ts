import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LayoutService } from '../../../../modules/layout/layout.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Post } from '../post.interface';
import { POST } from '../post.constants';
import { PostService } from '../post.service';
import { PostType } from '../post.enums';

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
export class ListPostComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() posts!: Observable<Post[]>;

  typeKeys = [] as string[];
  availableTags = [] as string[];
  postsList: Post[] = [] as Post[];
  dataSource = new MatTableDataSource(this.postsList);
  displayedColumns: string[] = ['title'];

  constructor(private layout: LayoutService) {
    this.typeKeys = Object.keys(PostType);
  }
  _type = new FormControl('');
  _title = new FormControl('');
  _tags = new FormControl([]);
  filterForm = new FormGroup({
    type: this._type,
    title: this._title,
    tags: this._tags,
  });

  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
    this.posts.subscribe((pl: Post[]) => {
      this.postsList = pl;
      this.dataSource.data = this.postsList;
      this.dataSource.filter = '';
      this.getAvailableTags();
    });
  }

  applyFilter() {
    this.dataSource.filterPredicate = function (data, filter): boolean {
      let filters = JSON.parse(filter);
      return (
        data.title.toLowerCase().includes(filters.title) &&
        data.type.toLowerCase().includes(filters.type) &&
        (filters.tags.length > 0
          ? data.tags.some((tag) => filters.tags.includes(tag))
          : true)
      );
    };
    this.dataSource.filter = JSON.stringify(this.filterForm.getRawValue());
    this.getAvailableTags();
  }

  getAvailableTags() {
    let uniqueTags: { [tag: string]: boolean } = {};
    this.dataSource.data.reduce((_, post) => {
      post.tags.forEach((tag) => {
        uniqueTags[tag] = true;
      });
      return null;
    }, null);
    this.availableTags = Object.keys(uniqueTags);
  }

  view(id: string) {
    //TODO go to the post url passing the post to the component
  }
}
