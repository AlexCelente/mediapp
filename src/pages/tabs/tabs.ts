import { Component } from '@angular/core';

import { PerfilPage } from '../perfil/perfil';
import { PendientesPage } from '../pendientes/pendientes';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PendientesPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
