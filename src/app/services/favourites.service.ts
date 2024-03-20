import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  firestore: Firestore = inject(Firestore);
  items$;
  items;
  unsubList;


  constructor() {
    this.unsubList = onSnapshot(this.getFavLeague(), (list) => {
      list.forEach(element => {
        console.log(element);        
      })
    });

    this.items$ = collectionData(this.getFavLeague());
    this.items = this.items$.subscribe((list) => {
      list.forEach(element => {
        console.log(element);
      });
    });
  }


  ngOnDestroy() {
    this.unsubList();
    this.items.unsubscribe();
  }


  getFavLeague() {
    return collection(this.firestore, 'league');
  }


  getFavTeam() {
    return collection(this.firestore, 'team');
  }


  getSingleFavLeague(collId: string, docId: string) {
    return doc(collection(this.firestore, collId), docId);
  }
}
