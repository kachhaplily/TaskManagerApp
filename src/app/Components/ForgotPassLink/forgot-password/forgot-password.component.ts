import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ForGotPassServiceService } from 'src/app/Services/ForgotPasswordService/for-got-pass-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email!: string;
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private passwordservice:ForGotPassServiceService,
    )
    {}
    onNoClick(){
      this.dialogRef.close();
    }

    forgotPassword(){
        this.passwordservice.forgotpassword(this.email).subscribe(res=>
          {
            localStorage.setItem('resetemail',res.email);
            localStorage.setItem('resettoken',res.resetToken);
          });
    }
}
