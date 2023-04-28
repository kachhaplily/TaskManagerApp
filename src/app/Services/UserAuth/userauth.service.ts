import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  apiurl = "https://localhost:7070/api/Auth/register";
  userid=localStorage.getItem("id");
  token=localStorage.getItem("token");
  constructor(private http: HttpClient) { }

  // add data into database [post]

  postData({ data }: { data: any; }): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.post<any>(this.apiurl ,data, { headers: headers });
  }
  // login or authanticate

  login(data:any): Observable<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  return this.http.post<any>("https://localhost:7070/api/Auth/login" ,data, { headers: headers });
  }
  // user update

  userUpdate(data:any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `bearer ${this.token}`);
    return this.http.put<any>(`https://localhost:7070/api/Auth/${this.userid}`,data, { headers: headers });
  }


  // // google signin
  // googleSignIn(token:any):Observable<any>{
  //   return this.http.post<any>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=[API_KEY]`,{
  //     postBody:`${token}&providerId=google.com`,
  //     requestUri:'http://localhost:4200',
  //     returnIdpCredential:true,
  //     returnSecureToken:true}
  //   );
  // }


}
