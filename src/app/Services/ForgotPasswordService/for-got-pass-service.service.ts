import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForGotPassServiceService {




  constructor(private http: HttpClient) { }
   // forgot password link send
   forgotpassword(email:string):Observable<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
    return this.http.post<any>(`https://localhost:7070/api/Auth/send-reset-email/${email}`,{headers});
  }

  // forgot password reset
  ResetPassword(data:any):Observable<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
    return this.http.post<any>(`https://localhost:7070/api/Auth/reset-password`,data,{headers});
  }
}


