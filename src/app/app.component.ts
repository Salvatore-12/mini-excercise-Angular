import { Component, OnInit } from '@angular/core'; // questo è il fulcro di angular
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';// importare il CommonModule perchè nel ultima,versione di angular non c'è importato in modo automatico 
import { ProvaComponent } from './prova/prova.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // questo  e l'import dei moduli per fare i form
import { HighlightDirective } from './direttive/highlight.directive'; //  qui e dove mettiamo l'import delle direttive
import { ServizoProvaService } from './servizi/servizo-prova.service';

import { HomeComponent } from "./componenti/home/home.component"; // import per il componente Contact
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';



@Component({
    selector: 'app-root', //questo qua è la nostra radice dove girearra tutto il nostro progetto;
    standalone: true,
    templateUrl: './app.component.html', //questo qua è il nostro html dove ci sono i vari bottoni ecc di app.component;
    styleUrls: ['./app.component.css'] //questo qua è il file css ovvero lo stile di app.component;
    ,
    imports: [RouterOutlet, RouterModule,ProvaComponent, MatInputModule, MatButtonModule, FormsModule, CommonModule, HighlightDirective,HomeComponent,ContattiComponent,ContattoComponent]
})
export class AppComponent implements OnInit {
  numero = 5
  oggi = Date.now()

  title = 'corso-angular'
  
  constructor(private servizioApp: ServizoProvaService){}

  ngOnInit(): void { 
   
  }

}








//app.component.ts è il cervello del componente
//*per creare un nuovo componente dobbiamo aprire un nuovo terminale,
//scrivere ng(che  sta per angular) generate component nome che vogliamo in questo caso lo chiamiamo prova
//oppure il metodo più veloce ng g(generate) c(component) prova 
//doveci creerà una cartella con il nome che gli abbiamo dato,
//dove dentro avra tutti i vari file component;