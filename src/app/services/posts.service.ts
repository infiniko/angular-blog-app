import { Injectable, inject } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, getDocs, increment, limit, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  firestore = inject(Firestore);
  constructor() { }

  async loadFeatured(){
    const postCollection = collection(this.firestore, 'posts');
    const q = query(postCollection, where("isFeatured", "==", true), limit(4));
    const querySnapshot = await getDocs(q);

    // Extract data
    const fPosts: any[] = [];
    querySnapshot.forEach((doc) => {
      fPosts.push({ id: doc.id, ...doc.data() });
    });
    return fPosts;
  }

  async loadLatest(){
    const postCollection = collection(this.firestore, 'posts');
    const q = query(postCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    // Extract data
    const lPosts: any[] = [];
    querySnapshot.forEach((doc) => {
      lPosts.push({ id: doc.id, ...doc.data() });
    });
    return lPosts;
  }

  async loadCategoryPosts(categoryId: any){
    const postCollection = collection(this.firestore, 'posts');
    const q = query(postCollection,  where("category.categoryId", "==", categoryId));
    const querySnapshot = await getDocs(q);

    // Extract data
    const cPosts: any[] = [];
    querySnapshot.forEach((doc) => {
      cPosts.push({ id: doc.id, ...doc.data() });
    });
    return cPosts;
  }

  loadOnePost(postId:any){
    const docRef = doc(this.firestore, `posts/${postId}`);
    return docData(docRef);
  }

  async loadSimilar(categoryId:any){
    const postCollection = collection(this.firestore, 'posts');
    const q = query(postCollection,  where("category.categoryId", "==", categoryId), limit(4));
    const querySnapshot = await getDocs(q);

    // Extract data
    const cPosts: any[] = [];
    querySnapshot.forEach((doc) => {
      cPosts.push({ id: doc.id, ...doc.data() });
    });
    return cPosts;
  }

  updateViews(id:any){
    const docRef = doc(this.firestore, `posts/${id}`);
    updateDoc(docRef,{
      views: increment(1)
    }).then( docRef => {
      console.log('updated views');
    });
  }
}
