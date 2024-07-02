import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { ServizoProvaService } from '../../servizi/servizo-prova.service';

@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {
  id:number | undefined
  persona: any

  constructor(private route: ActivatedRoute,private servizioProva: ServizoProvaService){}
 
  ngOnInit(): void {
   // this.id = +this.route.snapshot.paramMap.get('id')! // con + ho convertito in number,
                                                       // mentre con il ! gli abbiamo detto che siamo sicuri che non si null.

     this.route.paramMap.subscribe((params: ParamMap)=>{
        this.id= +params.get('id')! //qui e come se avessimo fatto il this.id di sopra 
        this.persona = this.servizioProva.getPersona(this.id) // qui dentro ci passiamo il nostro this.id che abbiamo appena fatto
     })                                                                                                                                                      
  }
}
