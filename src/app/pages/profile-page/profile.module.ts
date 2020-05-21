import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { ProfilePageRoutingModule } from './profile-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { JoyDialogComponent } from 'src/app/components/joy-dialog/joy-dialog.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: [
    ProfilePage,
    JoyDialogComponent
  ],
  entryComponents: [ JoyDialogComponent ],
})
export class ProfilePageModule {}
