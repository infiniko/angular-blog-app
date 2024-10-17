import { Injectable, inject } from '@angular/core';
import { collection, collectionData, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  firestore = inject(Firestore);
  constructor() { }

  async loadFeatured(){
    const postCollection = collection(this.firestore, 'posts');
    const q = query(postCollection, where("isFeatured", "==", true));
    const querySnapshot = await getDocs(q);

    // Extract data
    const fPosts: any[] = [];
    querySnapshot.forEach((doc) => {
      fPosts.push({ id: doc.id, ...doc.data() });
    });
    return fPosts;
  }
}
