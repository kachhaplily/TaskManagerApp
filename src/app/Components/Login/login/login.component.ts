import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardServiceService } from 'src/app/Services/GuardService/guard-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../../ForgotPassLink/forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Logindata!: FormGroup;


  constructor(private formBuilder: FormBuilder,

    private route: Router,
    private guardService: GuardServiceService,
    public dialog: MatDialog) {
    this.Logindata = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6),
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])],

    })

  }
  onSubmit() {
    if (this.Logindata.valid) {
      this.guardService.login(this.Logindata.value)
    }
    else {
      console.log("error")
    }
  }
  registration() {
    this.route.navigate(["reg"])
  }
  openEmailDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '700px',
      autoFocus: false,
      backdropClass: 'dialog-backdrop',
      position: {
        top: '10px',
        left: '30%'
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Email: ', result);
    });
  }



}
