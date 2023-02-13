import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Child to parent component';
   data="x";
  updateData(item:string){
    console.log(item);
    this.data= item;
  }
  

}
