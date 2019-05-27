import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';



@IonicPage()
@Component({
  selector: 'page-books-info',
  templateUrl: 'books-info.html',

})
export class BooksInfoPage {

  libros: Observable<any>;
  private id: any;
  uid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public booksProvider: BooksProvider,
    public db: AngularFireDatabase, public actionSheetCtrl: ActionSheetController,
    public afAuth: AngularFireAuth) {
    this.id = this.booksProvider.getId();
    this.libros = db.list('libros', ref => ref.orderByKey().equalTo(this.id)).valueChanges();
    this.afAuth.authState.subscribe(user => {
    this.uid = user.uid;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  public leido(id: any, portada: any){
    const vistas = this.db.list(`usuarios/${this.uid}/librosleidos`)
    vistas.set(id,
      {
      id: `${id}`,
      portada: `${portada}`
    });
  }

  public pendiente(id: any, captura: any, estreno: any, nombre: any, portada: any){
    const pendiente = this.db.list(`usuarios/${this.uid}/librospendientes`);
    pendiente.set(id,
      {
      id: `${id}`,
      fondo: `${captura}`,
      publicacion: `${estreno}`,
      titulo: `${nombre}`,
      portada: `${portada}`
    });
  }

  public lista(id: any, poster: any, nlista: any){
    if (nlista == "01"){
      const pendiente = this.db.list(`usuarios/${this.uid}/listas/01`);
      pendiente.set(id,
        {
        id: `${id}`,
        tipo: `libro`,
        poster: `${poster}`
      });
    }
    if (nlista == "02"){
      const pendiente = this.db.list(`usuarios/${this.uid}/listas/02`);
      pendiente.set(id,
        {
        id: `${id}`,
        tipo: `libro`,
        poster: `${poster}`
      });
    }
    if (nlista == "03"){
      const pendiente = this.db.list(`usuarios/${this.uid}/listas/03`);
      pendiente.set(id,
        {
        id: `${id}`,
        tipo: `libro`,
        poster: `${poster}`
      });
    }

  }

  public presentActionSheet(id: any, captura: any, estreno: any, nombre: any, poster: any) {
    const actionSheet = this.actionSheetCtrl.create({
      title: '¿A qué lista quieres añadirlo',
      buttons: [
        {
          text: 'Añadir a pendientes',
          handler: () => {
            this.pendiente(id, captura, estreno, nombre, poster);
          }
        },{
          text: 'Añadir a la lista 1',
          handler: () => {
            this.lista(id, poster, "01");
          }
        },{
          text: 'Añadir a la lista 2',
          handler: () => {
            this.lista(id, poster, "02");
          }
        },{
          text: 'Añadir a la lista 3',
          handler: () => {
            this.lista(id, poster, "03");
          }
        }
      ]
    });
    actionSheet.present();
  }

}
