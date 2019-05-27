import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Show }       from '../../models/show.model';
import { ShowsProvider } from '../../providers/shows/shows';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ShowsInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shows-info',
  templateUrl: 'shows-info.html',

})
export class ShowsInfoPage {

  private shows: Show[]=[];
  private id: number;
  public numSeason: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public showsProvider: ShowsProvider,
    private sanitizer: DomSanitizer) {
    this.shows = this.showsProvider.getShows();
    this.id = this.showsProvider.getId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowsInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  setSeason(num: number) {
  this.numSeason = num;
  }

  getSeason(){
    return this.numSeason;
  }

  transform(url: string) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
