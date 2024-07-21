import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Apikey ='AIzaSyDzAn5R8F-bn_uZ_Bl9rqMMHJwS9jLe894'
   url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.Apikey}`
   signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.Apikey}`
   isLoggin = true
   isAdmin = true
   user: User | undefined

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggin
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  createUser(email:string, id: string, token: string, expirationDate: Date){
    this.user = new User(email,id,token,expirationDate)
  }

  signUp(body: {}){
    return this.http.post(this.url, body)
  }
  
  signIn(email: string, password: string){
    return this.http.post(this.signInURL,{email: email, password: password, returnSecureToken: true})
  }
}
