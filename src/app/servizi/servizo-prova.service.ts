import { Injectable } from '@angular/core'; // questo Injectable ci dice,
                                            // che possiamo inniettare il nostro service in giro nei vari componenti.

@Injectable({
  providedIn: 'root'
})
export class ServizoProvaService {
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color:'blue'},
    {nome: "marco", cognome: "verdi",isOnline: false, color:'red'},
    {nome: "paolo", cognome: "belli",isOnline: false, color:'yellow'}, 
    {nome: "leonardo", cognome: "gialli",isOnline: true, color:'green'},
    {nome: "daniele", cognome: "blue",isOnline: false, color: 'purple'},
   ]
   
  constructor() { }

  getPersone(){
    return this.persone
  }

  getPersona(index: number){
    return this.persone[index]
  }
}
