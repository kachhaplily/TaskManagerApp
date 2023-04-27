import { Component } from '@angular/core';
import { FormGroup ,FormBuilder,Validators,ValidatorFn ,AbstractControl } from '@angular/forms';
import { ForGotPassServiceService } from 'src/app/Services/ForgotPasswordService/for-got-pass-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  passwordForm!: FormGroup;


  constructor(private fb: FormBuilder, private passwordservice:ForGotPassServiceService) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      newPassword: ['', Validators.compose([ Validators.required, Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])],
      confirmPassword: ['', Validators.required],
      email:localStorage.getItem("resetemail"),
      emailToken:localStorage.getItem('resettoken')
    })

  }




  onSubmit(): void {
    if (this.passwordForm.valid) {
      this.passwordservice.ResetPassword(this.passwordForm.value).subscribe(res=>console.log(res))
      console.log(this.passwordForm.value);
    }
  }
}
