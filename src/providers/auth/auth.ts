import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { TabsPage } from '../../pages/tabs/tabs';
import { App, AlertController } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {


   constructor(public alertController: AlertController, private app : App, public afAuth: AngularFireAuth, public http: HttpClient) {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Correo o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
      this.app.getActiveNav().push(TabsPage);
    }).catch((error) => {
      console.log(error);
      this.presentAlert();
    });
  }

  async signup(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
    }).catch((error) => {
      console.log(error);
    });

  }

  async logout(){
    this.afAuth.auth.signOut().then(() => {
      console.log("logged out");
    }).catch((error) => {
      console.log(error);
    });
  }

}
