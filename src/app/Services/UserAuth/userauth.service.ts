import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  private readonly baseUrl = "https://localhost:7070/api/Auth";
  private readonly registerUrl = `${this.baseUrl}/register`;
  private readonly loginUrl = `${this.baseUrl}/login`;
  private readonly userUrl = (id: Number) => `${this.baseUrl}/${id}`;

  private readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  private readonly token = localStorage.getItem("token");
  private readonly userId =Number(localStorage.getItem("id"));

  constructor(private readonly http: HttpClient) { }

  // add data into database [post]
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, data, { headers: this.headers });
  }

  // login or authenticate
  login(data: any): Observable<any>{
    return this.http.post<any>(this.loginUrl, data, { headers: this.headers });
  }

  // user update
  userUpdate(data: any): Observable<any> {
    const authHeaders = this.headers.set('Authorization', `bearer ${this.token}`);
    return this.http.put<any>(this.userUrl(this.userId), data, { headers: authHeaders });
  }
}
