import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  token = localStorage.getItem("token");
  userid = Number(localStorage.getItem("id"));

  constructor(private http: HttpClient) {
  }

  private _refreshrequired = new Subject<void>();

  get Refeshrequired() {
    return this._refreshrequired;
  }

  // addtask

  addTask(data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `bearer ${this.token}`);
    return this.http.post<any>(`https://localhost:7070/api/Task/Task?userId=${this.userid}`, data, { headers: headers })
      .pipe(
        tap(() => {
          this.Refeshrequired.next();
        })
      );
  }


  // gettask
  getTask(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `bearer ${this.token}`);
    return this.http.get<any>(`https://localhost:7070/api/Task/task/${this.userid}`, { headers: headers })
      ;
  }


  // delete task
  removeTask(taskid: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `bearer ${this.token}`);
    return this.http.delete<any>(`https://localhost:7070/api/Task/${this.userid}/tasks/${taskid}`, { headers: headers }).pipe(
      tap(() => {
        this.Refeshrequired.next();
      })
    );
  }

  // update task
  updateTask(taskid: number,data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept','application/json')
      .set('Authorization', `bearer ${this.token}`);
    return this.http.put<any>(`https://localhost:7070/api/Task/updateTask/${this.userid}/tasks/${taskid}`,data, { headers: headers }).pipe(
      tap(() => {
        this.Refeshrequired.next();
      })
    );
  }


}
