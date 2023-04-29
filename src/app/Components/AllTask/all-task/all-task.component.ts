import { Component, OnInit } from '@angular/core';
import { SortingService } from 'src/app/Services/Sorting/sorting.service';
import { TaskServiceService } from 'src/app/Services/TaskService/task-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddtaskComponent } from '../../AddTask/addtask/addtask.component';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css'],

})
export class AllTaskComponent implements OnInit {
  alltask!: any[]
  SearchText!: string;

  constructor(private taskservice: TaskServiceService, private sortingservice: SortingService,public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getdata()
    this.taskservice.Refeshrequired.subscribe(response => this.getdata());
  }

  getdata() {
    this.taskservice.getTask().subscribe(data => {
      this.alltask = data
      this.alltask = this.alltask.reverse();
    })
  }
  // remove function
  remove(Taskid: number) {
    this.taskservice.removeTask(Taskid).subscribe(y => console.log(y));
    this.taskservice.Refeshrequired.subscribe(response => this.getdata());
  }
  handleSearch(searchText: string) {
    this.SearchText = searchText;
  }

  onOptionSelected(selectedOption: string){
     this.sortingservice.sortTaskByPriority(this.alltask,selectedOption);
  }
  onDateSorting(selectiondate: string){
    console.log(selectiondate)
    this.sortingservice.sortTaskbyDate(this.alltask,selectiondate)

  }

  EditTAsk(Taskid: number){
    const task = this.alltask.find(task => task.taskId === Taskid);
    console.log(task)
    this.dialog.open(AddtaskComponent, {
      width:'500px',
      data:task,
      position: {
      top: '4%',
      left:'0'
    }
     });

  }


}












