import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'reactive form';
   loginForm= new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]) ,
    password : new FormControl('',[Validators.required,Validators.minLength(5)]),
 
   })

   userLogin(){
    console.log(this.loginForm.value)
   }
   
   get userValidator(){
     return this.loginForm.get('user');
   }
   
   get passwordValidator(){
    return this.loginForm.get('password');
  }
}
