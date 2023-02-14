import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'reactive form';
   loginForm= new FormGroup({
    user: new FormControl('username') ,
    password : new FormControl('password')
    
   })

   userLogin(){
    console.log(this.loginForm.value)
   }
   
   

}
