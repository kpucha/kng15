import { PostType } from './post.enums';
import { Timestamp } from 'firebase/firestore';

export interface Post {
  id: string;
  type: PostType;
  creationDate: Timestamp;
  updateDate: Timestamp;
  author: string;
  title: string;
  slug: string;
  tags: string[];
  content: string;
}
