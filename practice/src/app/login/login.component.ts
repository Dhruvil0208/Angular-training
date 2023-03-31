import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router , private fb : FormBuilder, private auth: AuthService){}

  isSuccess = false;

  redirectSignup(){
    this.route.navigate(['signup'])
  }

  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  })

  loginform(){
    console.log(this.loginForm.value);
    this.auth.postLoginData(this.loginForm.value).subscribe( (res:any) => 
      {
        console.log(res);
        if(res.message == 'success'){
          console.log(res.message)
          this.route.navigate(['home']);
        }
      }
    )
    
  }
}
