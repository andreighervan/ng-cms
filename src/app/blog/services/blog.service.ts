import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private db: AngularFirestore) { }

  createBlogPost(value, file) {
    return this.db.collection('blog').add({
      title: value.title,
      blogContent: value.blogContent,
      fileUploaded: file
    });
  }

  loadAllPosts() {
    return this.db.collection('blog')
      .snapshotChanges()
      .pipe(
        map(snaps => this.convertSnaps<Blog>(snaps)),
        first());
  }

  loadBlogByUrl(title) {
    return this.db.collection('blog',
      ref => ref.where("title", "==", title))
      .snapshotChanges()
      .pipe(
        map(snaps => {

          const courses = this.convertSnaps<Blog>(snaps);

          return courses.length == 1 ? courses[0] : undefined;
        }),
        first()
      )
  }

  delete(id: string): Promise<void> {
    return this.db.collection('blog').doc(id).delete();
  }

  updateBlogPost(id: string, changes: Blog): Observable<any> {

    return from(this.db.collection('blog').doc(id).update(changes));

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
