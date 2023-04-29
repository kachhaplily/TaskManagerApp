import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  baseurl='https://localhost:7070/api/Task';
  token = localStorage.getItem("token");
  userid = Number(localStorage.getItem("id"));

  private readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', `bearer ${this.token}`)


  constructor(private http: HttpClient) {
  }

  private _refreshrequired = new Subject<void>();

  get Refeshrequired() {
    return this._refreshrequired;
  }

  // addtask

  addTask(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/register?userId=${this.userid}`, data, { headers: this.headers })
      .pipe(
        tap(() => {
          this.Refeshrequired.next();
        })
      );
  }

  // gettask
  getTask(): Observable<any> {

    return this.http.get<any>(`${this.baseurl}/alltask/${this.userid}`, { headers: this.headers })
      ;
  }


  // delete task
  removeTask(taskid: number): Observable<any> {
    return this.http.delete<any>(`${this.baseurl}/delete/${this.userid},${taskid}`, { headers: this.headers }).pipe(
      tap(() => {
        this.Refeshrequired.next();
      })
    );
  }

  // update task
  updateTask(taskid: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseurl}/updateTask/${this.userid},${taskid}`, data, { headers: this.headers }).pipe(
      tap(() => {
        this.Refeshrequired.next();
      })
    );
  }


}
