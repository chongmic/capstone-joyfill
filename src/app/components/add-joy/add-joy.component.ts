import { Component, OnInit } from '@angular/core';
import { JoyService } from '../../services/joy.service';
import { Joy } from '../../models/Joy';

@Component({
  selector: 'app-add-joy',
  templateUrl: './add-joy.component.html',
  styleUrls: ['./add-joy.component.scss'],
})
export class AddJoyComponent implements OnInit {
  joy: Joy = {
    name: '',
    category: '',
    icon: 'assets/joy-icons/coffee.png',
    rank: 1,
    status: 100
  }

  constructor(private joyService: JoyService) { }

  ngOnInit() {}

  onSubmit() {
    if(this.joy.name != '' && this.joy.category != '') {
      this.joyService.addJoy(this.joy);
      this.joy.name = '';
      this.joy.category = '';
      this.joy.icon = 'assets/joy-icons/coffee.png';
    }
  }
}
