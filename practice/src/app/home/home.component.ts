import { Component } from '@angular/core';
import { FormBuilder,FormArray} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  

  constructor(private fb: FormBuilder){}

  reactiveForm = this.fb.group({
    firstName: [''],
    lastName:[''],
    address: this.fb.array([this.addAddressControls()])
  })

  addAddressControls(){
    return this.fb.group({
      street: [''],
      city: [''],
      state:[''], 
      phone: this.fb.array([this.fb.control('')])
    })
  }

  
  phone(i: number){
    
    return <FormArray> this.addressArray.controls[i].get('phone')
  }

  addPhone(index: number){
    const phoneNumbers = this.phone(index);
    phoneNumbers.push(this.fb.control(''));
  }
  addAddress(){
    this.addressArray.push(this.addAddressControls())
  }

  get addressArray(){
    return <FormArray>this.reactiveForm.get('address');
  }
  formSubmit(){
    console.log(this.addressArray.controls[0].get('phone'))
    console.log(this.reactiveForm.value);
  }
}
