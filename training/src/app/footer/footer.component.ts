import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users:any;
  constructor(private userdata:UserdataService)
{
  this.users=userdata.users();
  console.log("userdata",userdata.users());
}
}
