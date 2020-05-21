import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { JoyService } from '../../services/joy.service';
import { Joy } from '../../models/Joy';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { JoyDialogComponent } from '../../components/joy-dialog/joy-dialog.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-profile-page',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit{
  joys: Joy[];
  userProfile: User;
  panelOpenState = false;
  
  customCollapsedHeight: string = '190px';
  customExpandedHeight: string = '190px';

  constructor(private joyService: JoyService, 
    private userService: UserService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.userProfile = this.userService.currentUser;
    console.log(this.userProfile);
  }
  
  openDialog() {
    this.dialog.open(JoyDialogComponent);
  }
}
