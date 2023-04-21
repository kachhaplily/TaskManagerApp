import { Injectable } from '@angular/core';
import { UserauthService } from '../UserAuth/userauth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {

  constructor(private userauthservice:UserauthService,private router:Router) { }
  getToken(){
    return localStorage.getItem("token")
  }
  logout(){
    localStorage.removeItem("token")
    this.router.navigate([""])
  }
  login(value:any):Observable<any>{
    this.userauthservice.login(value).subscribe((r)=>{
      localStorage.setItem("token",r.token)
      localStorage.setItem("id",r.id)

      this.router.navigate(["dashboard"])
      console.log(r)})
      return <any>("login succed")
  }
  isLogin(): boolean {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if token is present, false otherwise
  }
}
