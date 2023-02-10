import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'training';
  // data = 'code step by step';
  // getValue(name:string){
  //     console.log(name)
  //     this.displayValue= name;
  // }
  // // getdata(val : string){
  // //   console.warn(val)
  // // }
  // displayValue:string = '';
  // count:number = 0;
  // counter( type : string){
  //   if(type === 'incr'){
  //     this.count++;
  //   }
  //   else if(type === 'decr'){
  //     this.count--;
  //   }
  //}
  // name = "string";
  // disable = false;
  // show = true;
  // color = 'green';

  //users = ['dhruvil','ruchit','meet'];
  users=[
    {
      name: 'dhruvil',
      email:'dhruvil@test.com',
      phone:'8888', 
      accounts: ['facebook','insta','gmail']
    },
    {
      name: 'ruchit',
      email:'ruchit@test.com',
      phone:'8888',
      accounts: ['youtube','insta','gmail']
    },
    {
      name: 'meet',
      email:'meet@test.com',
      phone:'8888',
      accounts: ['linkedin','insta','gmail']
    },

  ]
}
