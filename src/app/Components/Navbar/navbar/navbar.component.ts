import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { GuardServiceService } from 'src/app/Services/GuardService/guard-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
username:any
  constructor(private authgaurd:GuardServiceService,private router:Router){
    this.username=localStorage.getItem("userName");
    console.log(this.username)
  }


  logout(){
      this.authgaurd.logout()
  }

}
