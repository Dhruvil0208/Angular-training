import { compilePipeFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { UserdataService } from './service/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'api in angular';
   users:any;
  constructor(private userdata:UserdataService)
  {
    userdata.users().subscribe((data)=>{
      this.users=data;
    
      console.log(this.users);
    });
    
  }
}
