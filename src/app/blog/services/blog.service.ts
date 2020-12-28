import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  createBlogPost(value) {
    debugger;
    return this.db.collection('blog').add({
      title: value.title,
      blogContent: value.blogContent
    });
  }

  loadAllPosts() {
    return this.db.collection('blog')
      .snapshotChanges()
      .pipe(
        map(snaps => this.convertSnaps<Blog>(snaps)),
        first());
  }

  convertSnaps<T>(snaps) {
    return <T[]>snaps.map(snap => {
      return {
        id: snap.payload.doc.id,
        ...snap.payload.doc.data()
      };

    });
  }

}
