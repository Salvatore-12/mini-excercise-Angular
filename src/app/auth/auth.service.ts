import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLoggin = true
   isAdmin = true
  constructor() { }

  isAuthenticated(){
    return this.isLoggin
  }

  isRoleAdmin(){
    return this.isAdmin
  }
}
