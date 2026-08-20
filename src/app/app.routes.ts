import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { AtletaListComponent } from './component/atleta-list-component/atleta-list-component';

import { CorridaComponent } from './component/corrida/corrida-component/corrida-component';
import { CorridaListaComponent } from './component/corrida/corrida-lista-component/corrida-lista-component';

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'cadastroAtleta',
    component: AtletaComponent
  },

  {
    path: 'cadastroAtleta/:id',
    component: AtletaComponent
  },

  {
    path: 'listaAtleta',
    component: AtletaListComponent
  },

  {
    path: 'corrida',
    component: CorridaComponent
  },

  {
    path: 'corrida/:id',
    component: CorridaComponent
  },

  {
    path: 'corridas',
    component: CorridaListaComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];