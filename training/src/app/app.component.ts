import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'style binding';
  color = 'green';
  bgColor = 'blue';
  updateColor(){
    this.color="gray";
  }
}
