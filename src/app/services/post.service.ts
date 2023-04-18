import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../v2/blog/post/post.interface';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  DocumentReference,
  Firestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private firestore: Firestore = inject(Firestore);
  posts$!: Observable<Post[]>;
  postsCollection!: CollectionReference;

  createPost(post: Post) {
    addDoc(this.postsCollection, <Post>post).then(
      (documentReference: DocumentReference) => {
        // the documentReference provides access to the newly created document
      }
    );
  }
  getPostList() {}
  getPost(id: string) {}
  updatePost(post: Post) {}
  deletePost(id: string) {}
}
