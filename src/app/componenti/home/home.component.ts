import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {  MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseService } from '../../servizi/firebase.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatButtonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 homeform!: FormGroup;

  constructor(private firebase: FirebaseService){}

  ngOnInit(): void {
    this.homeform = new FormGroup({
     nome: new FormControl(null,Validators.required),
     email: new FormControl(null,[Validators.required,Validators.email] ),
     colore: new FormControl(null,Validators.required)
    })

 
  }

  onSubmit(){
    console.log(this.homeform)

    this.firebase.insertPersona(
      'https://corso-angular-de4b1-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
      {nome: this.homeform.value.nome, email: this.homeform.value.email, colore: this.homeform.value.colore }
    ).subscribe(data => {
      console.log(data);
    })
  }

  onDeletePersona(){
    this.firebase.deletePersona('https://corso-angular-de4b1-default-rtdb.europe-west1.firebasedatabase.app/persone','-O1W5keFjgiC0hTFval3')
    .subscribe(data =>{
      console.log(data)
      console.log('eliminato,',data)
    })
  }

  onPatchPersona(){
    this.firebase.patchPersona(
      'https://corso-angular-de4b1-default-rtdb.europe-west1.firebasedatabase.app/persone',
      '-O1W4YWbxokh0cjh6EuZ',{email:'prova@provagmail.com'}
    ).subscribe(data =>{
      console.log(data) 
    })
  }
}
