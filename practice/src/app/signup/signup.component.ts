import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private fb: FormBuilder, private auth: AuthService){
     
  }


  signUpForm = this.fb.group({
    username: [null,Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
  })

  signUp(){
    console.log(this.signUpForm.value)
    this.auth.postSignUpData(this.signUpForm.value).subscribe((res)=>
    {
      console.log(res);
    });
  }
}
