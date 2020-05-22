import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { FirestoreService } from '../../services/firestore.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  public searchTerm = '';

  joys: any = [];
  currentJoys: any = [];
  selectedJoys: any = new Set();

  constructor(
    public navCtrl: NavController,
    private userService: UserService,
    private firestoreService: FirestoreService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.afs.collection('joys').valueChanges().subscribe(joys => {
      this.joys = joys;
      this.currentJoys = joys;
      this.searchTerm = '';
    })
  }

  initializeJoys(): void {
    this.joys = this.currentJoys;
  }

  getItems(evt) {
    this.initializeJoys();
    this.searchTerm = evt.srcElement.value;

    if (!this.searchTerm) {
      return;
    }

    this.joys= this.joys.filter(searchJoys => {
      if(searchJoys.name && this.searchTerm || searchJoys.category && this.searchTerm) {
        if(searchJoys.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || 
           searchJoys.category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ) {
          return true;
        }
        return false;
      }
    });
  }

  selectJoy(joy) {
    console.log('Joy', joy);
    if (!this.selectedJoys.has(joy)) {
      this.selectedJoys.add(joy);
    }
    console.log(this.selectedJoys);
  }

  setToArray(joys) {
    const joyArray: any[] = [];
    for (const joy of joys) {
      joyArray.push(joy);
    }
    return joyArray;
  }

  submitJoys() {
    this.userService.currentUser.joys = this.setToArray(this.selectedJoys);
    this.firestoreService.setUserProfile(this.userService.currentUser);
    this.navCtrl.navigateForward('/main/home');
    console.log(this.userService.currentUser);
  }
}
