import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {
  firestore = inject(Firestore);
  constructor() { }

  addSub(subData:any){
    const x = collection(this.firestore, 'subscribers');
    addDoc(x, subData).then((docref) => {
      console.log('subbed');
    })
      .catch((err) => console.log(err));
  }

  async checkSub(subEmail:string){
    const subCollection = collection(this.firestore, 'subscribers');
    const q = query(subCollection,  where("email", "==", subEmail));
    const querySnapshot = await getDocs(q);
    // Extract data
    // const subData: any[] = [];
    // querySnapshot.forEach((doc) => {
    //   subData.push({ id: doc.id, ...doc.data() });
    // });
    // return subData.length;
    return querySnapshot;
  }
}
