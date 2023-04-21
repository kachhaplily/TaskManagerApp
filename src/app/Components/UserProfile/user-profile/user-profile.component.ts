import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserauthService } from 'src/app/Services/UserAuth/userauth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userprofile!: FormGroup;


  constructor(private formbuilder:FormBuilder,private userauthservice:UserauthService){
    this.userprofile=this.formbuilder.group({
      firstName:['',Validators.compose([Validators.required,Validators.min(2)])],
      lastName:['',Validators.compose([Validators.required,Validators.min(2)])],
    })

   }
   onSubmit(){
    if (this.userprofile.valid) {
        this.userauthservice.userUpdate(this.userprofile.value).subscribe(r=>console.log(r))
    }
    else {
      console.log("error")
    }
   }
}
