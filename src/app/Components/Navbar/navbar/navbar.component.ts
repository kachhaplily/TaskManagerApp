import { Component } from '@angular/core';
import { GuardServiceService } from 'src/app/Services/GuardService/guard-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authgaurd:GuardServiceService){}
  logout(){
      this.authgaurd.logout()
  }
}
