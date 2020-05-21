import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Joy } from '../models/Joy';

@Injectable({
  providedIn: 'root'
})
export class JoyService {
  joysCollection: AngularFirestoreCollection<Joy>;
  joys: Observable<Joy[]>;

  constructor(public afs: AngularFirestore) { 
    //this.joys = this.afs.collection('joys').valueChanges();
    this.joysCollection = this.afs.collection('joys', ref => ref.orderBy('rank', 'asc'));
    this.joys = this.joysCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Joy;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getJoys() {
    return this.joys;
  }

  addJoy(joy: Joy) {
    this.joysCollection.add(joy);
  }
}
