import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { JoyService } from './services/joy.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoyDialogComponent } from './components/joy-dialog/joy-dialog.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [JoyDialogComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'playground'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JoyService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
