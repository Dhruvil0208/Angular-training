import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';
  data = 'code step by step';
  getValue(name:string){
      console.log(name)
      this.displayValue= name;
  }
  // getdata(val : string){
  //   console.warn(val)
  // }
  displayValue:string = '';

}
