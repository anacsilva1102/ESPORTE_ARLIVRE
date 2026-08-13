import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { CorridasComponent } from './component/corridas-component/corridas-component';
import { InscricoesComponent } from './component/inscricoes-component/inscricoes-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastroatleta',
        component: AtletaComponent
    },
    {
        path: 'cadastrocorridas',
        component: CorridaComponent
    },
    {
        path: 'corridas',
        component: CorridasComponent
    },
    {
        path: 'inscricoes',
        component: InscricoesComponent
    }
];