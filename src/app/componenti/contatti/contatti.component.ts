import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServizoProvaService } from '../../servizi/servizo-prova.service';
import { CommonModule } from '@angular/common';
import { ContattoComponent } from '../contatto/contatto.component';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [RouterModule,CommonModule,ContattoComponent],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit {
  persone:any
  constructor(private servizioProva: ServizoProvaService){}
  
  ngOnInit(): void {
     this.persone = this.servizioProva.getPersone()
                                                                      // che se è il parametro è null mi mandi a schermo la lista contatto quindi false,
 }

}
