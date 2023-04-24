import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TaskServiceService } from 'src/app/Services/TaskService/task-service.service';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
  alltask!: any[]
  constructor(private taskservice: TaskServiceService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getdata()
    this.taskservice.Refeshrequired.subscribe(response => this.getdata());
  }

  getdata() {
    this.taskservice.getTask().subscribe(data => {
      this.alltask = data
    })
    this.alltask.sort((a, b) => this.alltask.indexOf(b) - this.alltask.indexOf(a));
  }
  getColor(priority: string): string {
    if (priority === 'Low') {
      return 'blue';
    } else if (priority === 'High') {
      return 'red';
    } else {
      return 'green';
    }
  }
}












