import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Parent to child component';
  data = 
    {
    name : 'dhruvil',
    age : 18,
    }
  

}
