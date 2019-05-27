import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PeliInfoPage } from '../peli-info/peli-info';
import { PelisProvider } from '../../providers/pelis/pelis'
import { BooksProvider } from '../../providers/books/books';
import { BooksInfoPage } from '../books-info/books-info';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  public contenido:        string ="pelis";
  usuarios:                Observable<any>;
  id:                      any;
  pelispendientes:         Observable<any>;
  librospendientes:        Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afAuth: AngularFireAuth, public db: AngularFireDatabase,
    public modalCtrl: ModalController, public pelisProvider: PelisProvider,
    public booksProvider: BooksProvider) {
      this.afAuth.authState.subscribe(user => {
      this.id = user.uid;
      this.usuarios = db.list('usuarios', ref => ref.orderByKey().equalTo(this.id)).valueChanges();
      this.pelispendientes = db.list(`usuarios/${this.id}/pelispendientes`).valueChanges();
      this.librospendientes = db.list(`usuarios/${this.id}/librospendientes`).valueChanges();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  goToPeli(id: number) {
     this.pelisProvider.setId(id);
     const modal = this.modalCtrl.create(PeliInfoPage);
     modal.present();
   }

  verPeli(id: any, poster: any){
    this.db.list(`usuarios/${this.id}/pelispendientes/${id}`).remove();
    const vistas = this.db.list(`usuarios/${this.id}/pelisvistas`);
    vistas.set(id,
      {
      id: `${id}`,
      poster: `${poster}`
    });
  }

   goToLibro(id: number) {
     this.booksProvider.setId(id);
     const modal = this.modalCtrl.create(BooksInfoPage);
     modal.present();
   }



}
