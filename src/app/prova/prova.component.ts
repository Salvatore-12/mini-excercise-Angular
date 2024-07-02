import {Component,OnInit} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ServizoProvaService } from '../servizi/servizo-prova.service';
@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatSlideToggleModule,MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit{
  
  constructor(private servizioProva: ServizoProvaService){}
  
  ngOnInit(): void {
    console.log("qui siamo dento prova.component", this.servizioProva.persone)
  }
   
}
