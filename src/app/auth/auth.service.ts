import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyDzAn5R8F-bn_uZ_Bl9rqMMHJwS9jLe894]"
   isLoggin = true
   isAdmin = true
  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggin
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  signUp(body: {}){
    return this.http.post(this.url, body)
  }

}
