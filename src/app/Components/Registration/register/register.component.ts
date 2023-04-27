import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserauthService } from '../../../Services/UserAuth/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegistrationForm!: FormGroup;


  constructor(private formBuilder: FormBuilder ,private userauthservice:UserauthService,private route:Router){
    this.RegistrationForm=this.formBuilder.group({
      firstName:['',Validators.compose([Validators.required,Validators.min(2)])],
      lastName:['',Validators.compose([Validators.required,Validators.min(2)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6),
       // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])],

    })

   }
   onSubmit(){
    if (this.RegistrationForm.valid) {
      this.userauthservice.postData({ data: this.RegistrationForm.value }).subscribe(r => console.log(r));
      this.route.navigate([""])
    }
    else {
      console.log("error")
    }
   }
   login(){
    this.route.navigate([""])
   }

}
