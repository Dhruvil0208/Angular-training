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
    user: new FormControl('username') ,
    password : new FormControl('password',[Validators.required]),
    child : new FormGroup({
      
        password1: new FormControl('username'),
      
   })
   })

   userLogin(){
    console.log(this.loginForm.value)
   }
   
   

}
