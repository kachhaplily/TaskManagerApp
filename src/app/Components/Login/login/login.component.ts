import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserauthService } from '../../../Services/UserAuth/userauth.service';
import { Router } from '@angular/router';
import { GuardServiceService } from 'src/app/Services/GuardService/guard-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Logindata!: FormGroup;


  constructor(private formBuilder: FormBuilder ,
    private userauthservice:UserauthService,
    private route:Router,
    private guardService:GuardServiceService){
    this.Logindata=this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6),
       // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])],

    })

   }
   onSubmit(){
    if (this.Logindata.valid) {
      this.guardService.login(this.Logindata.value)
    }
    else {
      console.log("error")
    }
   }
   registration(){
    this.route.navigate(["reg"])
   }

}
