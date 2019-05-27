import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BooksInfoPage } from './books-info';

@NgModule({
  declarations: [
    BooksInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BooksInfoPage),
  ],
})
export class BooksInfoPageModule {}
