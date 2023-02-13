import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'todolist';
  list:any[]=[];
  addTask(item:string){
    console.log(item)
    this.list.push({id:this.list.length,name:item})

    console.log(this.list)
  }
  removeTask(id:number){
    this.list = this.list.filter(item=>item.id!==id);
  }
}
