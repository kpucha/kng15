import { Post } from './post.interface';
import { PostType } from './post.enums';
import { Timestamp } from 'firebase/firestore';

export class POST {
  public static FIRESTORE_COLLECTION = 'posts';

  /**
   * DEMO POST
   *
   * @public
   * @static
   * @type {Post}
   */
  public static MOCK_POST: Post = {
    id: 'keyeyeyeyey',
    author: 'EGHs0P33EJRtFbq90BDmyZn44mu2',
    type: PostType.note,
    creationDate: Timestamp.fromDate(new Date()),
    updateDate: Timestamp.fromDate(new Date()),
    title: 'Mock Post de tipo post para pruebas',
    slug: 'mock-post-de-tipo-post-para-pruebas',
    tags: [
      'tag1',
      'tag2',
      'tag3',
      'tag4',
      'tag5',
      'tag6',
      'tag7',
      'tag8',
      'tag9',
      'tag10',
      'tag11',
      'tag12',
      'tag13',
      'tag14',
    ],
    content:
      '<h2>TITULO DE CONTENIDO DE PRUEBA</h2><br/><p>Parrafo de prueba</p>',
  };
}
