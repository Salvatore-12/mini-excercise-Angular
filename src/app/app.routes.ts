import { Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';


export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'contatti', component: ContattiComponent, children:[  
    {path:':id', component: ContattoComponent},
  ]},
];




