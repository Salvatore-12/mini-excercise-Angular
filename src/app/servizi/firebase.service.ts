
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  
  constructor(private http: HttpClient) { }

  insertPersona(url: string, body:{}){
  return this.http.post(url, body) // dove nel primo parametro ci mettiamo url
                           // mentre nel secondo parametro sara il boby.
  }

  getPersona(url: string){
    return this.http.get(url)
  }
  deletePersona(url: string, id: string){
    return this.http.delete(`${url}/${id}.json`)
  }
  patchPersona(url: string, id: string,body: {}){
    return this.http.patch(`${url}/${id}.json`, body)
  }   
}
