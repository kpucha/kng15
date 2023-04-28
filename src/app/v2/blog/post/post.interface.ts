import { FieldValue } from '@angular/fire/firestore';
import { PostType } from './post.enums';
import { Timestamp } from 'firebase/firestore';

export interface Post {
  id: string;
  type: PostType;
  creationDate: FieldValue;
  updateDate: FieldValue;
  author: string;
  title: string;
  slug: string;
  tags: string[];
  content: string;
}

export interface CreatePostForm {
  type: PostType;
  title: string;
  slug: string;
  tags: string[];
  content: string;
}
