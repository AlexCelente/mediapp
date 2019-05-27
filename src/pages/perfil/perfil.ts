import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { BooksProvider } from '../../providers/books/books';
import { BooksInfoPage } from '../books-info/books-info';
import { PelisProvider } from '../../providers/pelis/pelis';
import { PeliInfoPage } from '../peli-info/peli-info';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuarios: Observable<any>;
  id: any;
  librosleidos: Observable<any>;
  pelisvistas: Observable<any>;
  listausuario1: Observable<any>;
  listausuario2: Observable<any>;
  listausuario3: Observable<any>;


  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams,
  public afAuth: AngularFireAuth, public db: AngularFireDatabase,
  public booksProvider: BooksProvider, public pelisProvider: PelisProvider,
  public modalCtrl: ModalController) {
      this.afAuth.authState.subscribe(user => {
      this.id = user.uid;
      this.usuarios = db.list('usuarios', ref => ref.orderByKey().equalTo(this.id)).valueChanges();
      this.librosleidos = db.list(`usuarios/${this.id}/librosleidos`).valueChanges();
      this.pelisvistas = db.list(`usuarios/${this.id}/pelisvistas`).valueChanges();
      this.listausuario1 = db.list(`usuarios/${this.id}/listas/01`).valueChanges();
      this.listausuario2 = db.list(`usuarios/${this.id}/listas/02`).valueChanges();
      this.listausuario3 = db.list(`usuarios/${this.id}/listas/03`).valueChanges();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  goToBook(id:any) {
    this.booksProvider.setId(id);
    const modal = this.modalCtrl.create(BooksInfoPage);
    modal.present();
 }

 goToPeli(id:any) {
   this.pelisProvider.setId(id);
   const modal = this.modalCtrl.create(PeliInfoPage);
   modal.present();
}

  goTo(id: any, tipo: any){
    if (tipo == "peli"){
      this.pelisProvider.setId(id);
      const modal = this.modalCtrl.create(PeliInfoPage);
      modal.present();
    }
    if (tipo == "libro"){
      this.booksProvider.setId(id);
      const modal = this.modalCtrl.create(BooksInfoPage);
      modal.present();
    }
    if (tipo == "serie"){
      this.booksProvider.setId(id);
      const modal = this.modalCtrl.create(BooksInfoPage);
      modal.present();
    }
  }

  cambiarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((DATA_URL) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      const user =this.db.list(`usuarios/${this.id}/userpic`);
      user.set(base64Image);
    });

}
}
