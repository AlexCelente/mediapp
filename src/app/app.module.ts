import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PerfilPage } from '../pages/perfil/perfil';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PeliInfoPage } from '../pages/peli-info/peli-info';
import { BooksInfoPage } from '../pages/books-info/books-info';
import { ShowsInfoPage } from '../pages/shows-info/shows-info';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PelisProvider } from '../providers/pelis/pelis';
import { BooksProvider } from '../providers/books/books';
import { ShowsProvider } from '../providers/shows/shows';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera/ngx';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    PeliInfoPage,
    BooksInfoPage,
    ShowsInfoPage,
    PerfilPage,
    PendientesPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    PeliInfoPage,
    BooksInfoPage,
    ShowsInfoPage,
    PerfilPage,
    PendientesPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PelisProvider,
    BooksProvider,
    AuthProvider,
    Camera,
    ShowsProvider
  ]
})
export class AppModule {}
