import { Injectable, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  firestore = inject(Firestore);
  constructor() { }

  loadData(){
    const x = collection(this.firestore, 'posts');
    const postCollection:any = collectionData(x, { idField: 'id' }) as Observable<any>;
    return postCollection;
  }
}
