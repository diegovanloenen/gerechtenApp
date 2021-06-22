import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Gerecht {
  id?: string,
  name: string,
  notes: string,
  photo: string
}
 
@Injectable({
  providedIn: 'root'
})
export class GerechtService {
  private gerechten: Observable<Gerecht[]>;
  private gerechtCollection: AngularFirestoreCollection<Gerecht>;
 
  constructor(private afs: AngularFirestore) {
    this.gerechtCollection = this.afs.collection<Gerecht>('gerechten');
    this.gerechten = this.gerechtCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getGerechten(): Observable<Gerecht[]> {
    return this.gerechten;
  }
 
  getGerecht(id: string): Observable<Gerecht> {
    return this.gerechtCollection.doc<Gerecht>(id).valueChanges().pipe(
      take(1),
      map(gerecht => {
        gerecht.id = id;
        return gerecht
      })
    );
  }
 
  addGerecht(gerecht: Gerecht): Promise<DocumentReference> {
    return this.gerechtCollection.add(gerecht);
  }
 
  updateGerecht(gerecht: Gerecht): Promise<void> {
    return this.gerechtCollection.doc(gerecht.id).update({ name: gerecht.name, notes: gerecht.notes, photo: gerecht.photo });
  }
 
  deleteGerecht(id: string): Promise<void> {
    return this.gerechtCollection.doc(id).delete();
  }
}