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
   title = 'directive in angular';
   users:any;
  constructor(private userdata:UserdataService)
{
  this.users=userdata.users();
  console.log("userdata",userdata.users());
}
}
