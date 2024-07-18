import { Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { authGuard, authGuardChild } from './auth/auth.guard';
import { SignupComponent } from './componenti/signup/signup.component';


export const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'signup', component: SignupComponent},
  { path:'contatti', component: ContattiComponent, canActivate:[authGuard],canActivateChild:[authGuardChild], children:[  
    { path:':id', component: ContattoComponent},
  ]},
  { path: '404',component: NotfoundComponent},
  {path:'**',redirectTo:'/404'} // qui stiamo dicendo con ** per indicare qualsiasi path,
                                // che non sia tra quelli di sopra e ogni volta che andiamo a trovare un altro url che non è specificato qua dentro,
                                // ci diciamo con redirectTo:'/404',di andare al path 404.  
];




