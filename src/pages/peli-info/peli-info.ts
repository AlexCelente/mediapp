import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { PelisProvider } from '../../providers/pelis/pelis';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-peli-info',
  templateUrl: 'peli-info.html',

})
export class PeliInfoPage {

  item: Observable<any>;
  private id: any;
  uid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public pelisProvider: PelisProvider,
    public db: AngularFireDatabase, private sanitizer: DomSanitizer,
    public afAuth: AngularFireAuth, public actionSheetCtrl: ActionSheetController) {
    this.id = this.pelisProvider.getId();
    this.item = db.list('pelis', ref => ref.orderByKey().equalTo(this.id)).valueChanges();
    this.afAuth.authState.subscribe(user => {
    this.uid = user.uid;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public visto(id: any, poster: any){
    const vistas = this.db.list(`usuarios/${this.uid}/pelisvistas`);
    vistas.set(id,
      {
      id: `${id}`,
      poster: `${poster}`
    });
  }

  public pendiente(id: any, captura: any, estreno: any, nombre: any, poster: any){
    const pendiente = this.db.list(`usuarios/${this.uid}/pelispendientes`);
    pendiente.set(id,
      {
      id: `${id}`,
      captura: `${captura}`,
      estreno: `${estreno}`,
      nombre: `${nombre}`,
      poster: `${poster}`
    });
  }

  public lista(id: any, poster: any, nlista: any){
    if (nlista == "01"){
      const pendiente = this.db.list(`usuarios/${this.uid}/listas/01`);
      pendiente.set(id,
        {
        id: `${id}`,
        tipo: `peli`,
        poster: `${poster}`
      });
    }
    if (nlista == "02"){
      const pendiente = this.db.list(`usuarios/${this.uid}/listas/02`);
      pendiente.set(id,
        {
        id: `${id}`,
        tipo: `peli`,
        poster: `${poster}`
      });
    }
    if (nlista == "03"){
      const pendiente = this.db.list(`usuarios/${this.uid}/listas/03`);
      pendiente.set(id,
        {
        id: `${id}`,
        tipo: `peli`,
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
