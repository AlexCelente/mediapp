import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PeliInfoPage } from '../peli-info/peli-info';
import { BooksInfoPage } from '../books-info/books-info';
import { ShowsInfoPage } from '../shows-info/shows-info';
import { PelisProvider } from '../../providers/pelis/pelis';
import { BooksProvider } from '../../providers/books/books';
import { ShowsProvider } from '../../providers/shows/shows';
import { Peli }       from '../../models/pelicula.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  pelisnuevas: Observable<any>;
  principiosagaspelis: Observable<any>;
  mejoresmalos: Observable<any>;
  comedias: Observable<any>;
  restopelis: Observable<any>;
  grandeslibros: Observable<any>;
  principiosagas: Observable<any>;
  grandesespanoles: Observable<any>;
  comics: Observable<any>;
  restolibros: Observable<any>;
  public  backgroundpelis:  Array <string> = ["https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg", "https://image.tmdb.org/t/p/original/qwgGtdlLMKYvT2tV8hLY22syRHN.jpg", "https://image.tmdb.org/t/p/original/sC0b8iPUHfZdD8kseLiHw3N8gkp.jpg"];
  public  backgroundseries: Array <string> = ["https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg", "https://image.tmdb.org/t/p/original/57tEFdbx3cHq55AlRNIh2LEu7Qx.jpg", "https://image.tmdb.org/t/p/original/3iA6dwr7OclU7gBGbBsiHMMqEfm.jpg"];
  public  backgroundlibros: Array <string> = ["http://cdn.wallpapersafari.com/11/83/lk5Fou.jpg", "https://wallup.net/wp-content/uploads/2017/11/23/441605-Don_Quijote-creature-giant-748x421.jpg", "https://images.alphacoders.com/892/thumb-1920-892819.jpg"];
  public  backgroundcolor:  Array <string> = ["#1c0c4a", "#a5a9aa", "#1b1a1a", "#1b1a1a", "#001e3b", "#335350", "#214054", "#3c442d", "#664c6c"];
  public  backsplash:       string = this.backgroundpelis[0];
  public  backcolor:        string = this.backgroundcolor[0];
  public  contenido:        string ="pelis";

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public modalCtrl: ModalController, public pelisProvider: PelisProvider, public booksProvider: BooksProvider, public showsProvider: ShowsProvider) {
    this.pelisnuevas = db.list('pelis', ref => ref.orderByChild('lista').equalTo(1)).valueChanges();
    this.principiosagaspelis = db.list('pelis', ref => ref.orderByChild('lista').equalTo(2)).valueChanges();
    this.mejoresmalos = db.list('pelis', ref => ref.orderByChild('lista').equalTo(3)).valueChanges();
    this.comedias = db.list('pelis', ref => ref.orderByChild('lista').equalTo(4)).valueChanges();
    this.restopelis = db.list('pelis', ref=> ref.orderByChild('lista').equalTo(5)).valueChanges();
    this.grandeslibros = db.list('libros', ref=> ref.orderByChild('lista').equalTo(1)).valueChanges();
    this.principiosagas = db.list('libros', ref=> ref.orderByChild('lista').equalTo(2)).valueChanges();
    this.grandesespanoles = db.list('libros', ref=> ref.orderByChild('lista').equalTo(3)).valueChanges();
    this.comics = db.list('libros', ref=> ref.orderByChild('lista').equalTo(4)).valueChanges();
    this.restolibros = db.list('libros', ref=> ref.orderByChild('lista').equalTo(5)).valueChanges();
    var rand = Math.floor(Math.random()*3);
    this.backsplash = this.backgroundpelis[rand];
    this.backcolor = this.backgroundcolor[rand];
  }

  cambiaPelis() {
    var rand = Math.floor(Math.random()*3);
    this.backsplash = this.backgroundpelis[rand];
    this.backcolor = this.backgroundcolor[rand];
}

  cambiaSeries() {
    var rand = Math.floor(Math.random()*3);
    this.backsplash = this.backgroundseries[rand];
    this.backcolor = this.backgroundcolor[rand+3];
  }

  cambiaLibros() {
    var rand = Math.floor(Math.random()*3);
    this.backsplash = this.backgroundlibros[rand];
    this.backcolor = this.backgroundcolor[rand+6];
  }

  presentModal(id:number) {
    this.pelisProvider.setId(id);
    const modal = this.modalCtrl.create(PeliInfoPage);
    modal.present();
   }

  goToBook(id:number) {
    this.booksProvider.setId(id);
    const modal = this.modalCtrl.create(BooksInfoPage);
    modal.present();
 }

 goToShow(id:number) {
   this.showsProvider.setId(id);
   const modal = this.modalCtrl.create(ShowsInfoPage);
   modal.present();
  }

}
