import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,MatSelectModule,MatInput,MatButton],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 homeform!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.homeform = new FormGroup({
     nome: new FormControl(null,Validators.required),
     email: new FormControl(null,[Validators.required,Validators.email] ),
     colore: new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    console.log(this.homeform)
  }

}
