import { Injectable, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  firestore = inject(Firestore);
  constructor() { }

  loadData(){
    const x = collection(this.firestore, 'categories');
    const categoryCollection:any = collectionData(x, { idField: 'id' }) as Observable<any>;
    return categoryCollection;
  }
}
