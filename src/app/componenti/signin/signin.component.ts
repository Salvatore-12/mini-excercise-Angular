import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule ,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatInputModule,
            MatButtonModule,
            HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit {

   constructor(private authService: AuthService){}

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.signIn(email,password).subscribe((data: any) =>{
      console.log(data)
      const expirationDate = new Date(new Date().getTime() + data.expirationDate *1000)                  //questo const ci fa convertire la scadenza del token da number in date
      this.authService.createUser(data.email,data.locaId,data.idToken,expirationDate)
      localStorage.setItem('user',JSON.stringify(this.authService.user))

      console.log(this.authService.user)
    })
    form.reset()
  }

}
