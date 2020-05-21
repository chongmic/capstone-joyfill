import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userProfile: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userProfile = this.userService.currentUser;
  }

}
