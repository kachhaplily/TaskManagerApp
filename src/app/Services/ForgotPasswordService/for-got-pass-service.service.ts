import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForGotPassServiceService {
  baseurl='https://localhost:7070/api/Auth';
  private readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  constructor(private http: HttpClient) { }
   // forgot password link send
   forgotpassword(email:string):Observable<any>{

    return this.http.post<any>(`${this.baseurl}/send-reset-email/${email}`,{headers: this.headers});
  }

  // forgot password reset
  ResetPassword(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/reset-password`,data,{headers:this.headers});
  }
}


