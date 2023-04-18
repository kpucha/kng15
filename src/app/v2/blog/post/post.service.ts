import { ActivatedRoute } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POST } from './post.constants';
import { Post } from './post.interface';
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  FieldPath,
  Firestore,
  onSnapshot,
  Query,
  query,
  QuerySnapshot,
  where,
  WhereFilterOp,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private firestore: Firestore = inject(Firestore);
  private postCollection: CollectionReference<DocumentData> = collection(
    this.firestore,
    POST.FIRESTORE_COLLECTION
  );

  constructor() {}

  /**
   *
   *  CREATE
   *
   */

  /**
   *
   *  READ
   *
   */
  getPostList(): Observable<Post[]> {
    return collectionData(this.postCollection) as Observable<Post[]>;
  }

  getPostBySlug(slug: string): Observable<Post[]> {
    if (slug.trim() == '') throw new Error('EL SLUG NO PUEDE ESTAR VACÍO');
    const slugQuery: Query<DocumentData> = query(
      this.postCollection,
      where('slug', '==', slug)
    );
    return collectionData(slugQuery) as Observable<Post[]>;
  }

  /**
   *
   *  UPDATE
   *
   */

  /**
   *
   *  DELETE  * POR AHORA LOS POST SOLO SE ELIMINAN A MANO
   *
   */
}
