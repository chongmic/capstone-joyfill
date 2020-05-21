import { Injectable } from '@angular/core';
import { User } from '../models/user.class';
import { AuthenticateService } from './authentication.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  public currentUser: User = new User();

  constructor(
      private authService: AuthenticateService,
      private db: AngularFirestore,
  ) { }

  init() {
      return new Promise<void>((resolve, reject) => {
          console.log('AppInitService.init() called');
          const uid = localStorage.getItem('uid');
          if (uid === null) {
              resolve();
          }

          this.userDoc = this.db.collection('users').doc(localStorage.getItem('uid'));
          this.user = this.userDoc.valueChanges();

          this.user.subscribe(data => {
              const keys = Object.keys(data);
              for (const key of keys) {
                  this.currentUser[key] = data[key];
              }
              console.log(this.currentUser);
              resolve();
          });
      });
  }

  getUser(uid) {
      console.log(uid);
  }
}
