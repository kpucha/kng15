import { AuthService } from 'src/app/modules/auth/auth.service';
import { CreatePostForm, Post } from './post.interface';
import { FirebaseApp } from '@angular/fire/app';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POST } from './post.constants';
import { Router } from '@angular/router';
import { serverTimestamp } from '@firebase/firestore';
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  getDoc,
  Firestore,
  Query,
  query,
  where,
  doc,
  setDoc,
  addDoc,
  docData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postCollection: CollectionReference<DocumentData>;
  private draftCollection: CollectionReference<DocumentData>;

  constructor(
    private firestore: Firestore,
    private authService: AuthService,
    private router: Router
  ) {
    this.postCollection = collection(this.firestore, POST.FIRESTORE_COLLECTION);
    this.draftCollection = collection(
      this.firestore,
      POST.FIRESTORE_DRAFT_COLLECTION
    );
  }

  goToPost() {
    this.router.navigate(['/v2/blog/']);
  }

  submitDraft(createPostForm: CreatePostForm): void {
    let draft: Post = this.generateDraft(createPostForm);
    this.insertPost(draft, true);
  }

  submitPost(createPostForm: CreatePostForm): void {
    let draft: Post = this.generateDraft(createPostForm);
    this.insertPost(draft, true)
      .catch((e) => console.error('Error creando draft del post'))
      .then(() => {
        this.insertPost(draft, false)
          .catch((e) => console.error('Error creando post', draft))
          .then(() => {
            this.router.navigate(['/v2/blog/' + draft.slug]);
          });
      });
  }

  getPostList(): Observable<Post[]> {
    return collectionData(this.postCollection) as Observable<Post[]>;
  }

  getPostById(id: string): Observable<Post> {
    if (id.trim() == '') throw new Error('SLUG REQUIRED');
    let postRef = doc(this.firestore, POST.FIRESTORE_COLLECTION, id);
    return docData(postRef) as Observable<Post>;
  }

  getDraftById(id: string): Observable<Post> {
    if (id.trim() == '') throw new Error('SLUG REQUIRED');
    let draftRef = doc(this.firestore, POST.FIRESTORE_DRAFT_COLLECTION, id);
    return docData(draftRef) as Observable<Post>;
  }

  getPostBySlug(slug: string): Observable<Post[]> {
    if (slug.trim() == '') throw new Error('SLUG REQUIRED');
    const slugQuery: Query<DocumentData> = query(
      this.postCollection,
      where('slug', '==', slug)
    );
    return collectionData(slugQuery) as Observable<Post[]>;
  }

  getSlug(title: string | null): string {
    if (title == null) return '';
    return title
      .replaceAll(' ', '-')
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  private generateDraft(createPostForm: CreatePostForm): Post {
    let newRef = doc(this.draftCollection);
    let newPost: Post = {
      id: newRef.id,
      type: createPostForm.type,
      creationDate: serverTimestamp(),
      updateDate: serverTimestamp(),
      author: this.authService.userLogged.uid,
      title: createPostForm.title,
      slug: this.getSlug(createPostForm.title),
      tags: createPostForm.tags,
      content: createPostForm.content,
    };
    return newPost;
  }

  private insertPost(post: Post, isDraft?: boolean) {
    let fsCollection = isDraft
      ? POST.FIRESTORE_DRAFT_COLLECTION
      : POST.FIRESTORE_COLLECTION;
    let postRef = doc(this.firestore, fsCollection, post.id);
    return setDoc(postRef, post);
  }
}
