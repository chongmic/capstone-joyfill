import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { Joy } from '../../models/joy';
import { JoyService } from '../../services/joy.service';
import { FirestoreService } from '../../services/firestore.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  joys: any = [];
  currentJoys: any = [];
  selectedJoys: any = new Set();

  constructor(
    public navCtrl: NavController,
    private userService: UserService,
    private joyService: JoyService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.joyService.getJoys().subscribe(joys => {
      console.log(joys);
      this.joys = joys;
    })
  }

  getItems(ev:any) {
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.joys = this.joys.filter(joy => {
        return joy.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  selectJoy(joy) {
    console.log('Joy', joy);
    if (!this.selectedJoys.has(joy)) {
      this.selectedJoys.add(joy);
    }
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
