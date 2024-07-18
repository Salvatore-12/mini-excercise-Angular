import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseService } from '../../servizi/firebase.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatInputModule,
            MatButtonModule,
            HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    console.log(email,password)
    this.authService.signUp({email: email, password: password,returnSecureToken: true})
    form.reset()
  }
}
