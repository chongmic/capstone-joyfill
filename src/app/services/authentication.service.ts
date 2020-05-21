import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private afAuth: AngularFireAuth) { }

  /*******************************************/

  isAuthenticated() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged((user) => {
        resolve(user);
      });
    });
  }

  updateUserProfile(value) {
    this.afAuth.auth.currentUser.updateProfile(value).then(() => {
      console.log('User profile successfully updated');
    }).catch((error) => {
      // an error occurred
    });
  }

  getUid() {
    return this.afAuth.auth.currentUser.uid;
  }

  getUser() {
    console.log(this.afAuth.auth.currentUser);
    return this.afAuth.auth.currentUser;
  }

  /*******************************************/

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })

  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.afAuth.user
  }
}