import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowsInfoPage } from './shows-info';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    ShowsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowsInfoPage),
  ],
})
export class ShowsInfoPageModule {}
