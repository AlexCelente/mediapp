import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeliInfoPage } from './peli-info';

@NgModule({
  declarations: [
    PeliInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PeliInfoPage),
  ],
})
export class PeliInfoPageModule {}
