import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContattoComponent } from '../contatto/contatto.component';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [RouterModule,CommonModule,ContattoComponent],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit {
  persone:any
  constructor(private firebase: FirebaseService){}
  
  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone()
   this.firebase.getPersona('https://corso-angular-de4b1-default-rtdb.europe-west1.firebasedatabase.app/persone.json')
   .subscribe((data: any) =>{
    //console.log(data) // questo console è il dato che ci arriva (sporco che ci arriva tramite firebase)
    //console.log(Object.keys(data)) // questo qua sono le keys del oggetto che ci arriva tamite firebase
    this.persone = Object.keys(data).map((key)=>{
      data[key]['id'] = key
      return data[key]})
    console.log(this.persone) // questo qua e il dato pulito da noi
  })                                                                   
 }

}
