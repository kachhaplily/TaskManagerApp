import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskServiceService } from 'src/app/Services/TaskService/task-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  priorityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ];
  taskStatus: string[] = ['Todo', 'inProgress', 'Completed'];

  AddTask!: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskservice: TaskServiceService, @Inject(MAT_DIALOG_DATA) public data: any, private _dialogRef: MatDialogRef<AddtaskComponent>) {

    this.AddTask = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.min(2)])],
      description: ['', Validators.compose([Validators.required])],
      priority: ['', Validators.compose([Validators.required])],
      dueDate: ['', Validators.compose([Validators.required,this.validateDate])],
      status: ['', Validators.compose([Validators.required])]
    })
  }
  validateDate(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    let currentDate = new Date();
    let yesterday = new Date();
    yesterday.setDate(currentDate.getDate()-1);
    return inputDate > yesterday  ? null : { pastDate: true };
  }

  ngOnInit(): void {
    this.AddTask.patchValue(this.data);
  }
  onSubmit() {
    if (this.AddTask.valid) {
      if (this.data) {
        // Update existing task
        const taskId = this.data.taskId;
        const updatedTask = this.AddTask.value;
        this.taskservice.updateTask(taskId, updatedTask).subscribe(res => {
          this._dialogRef.close(true);
          console.log(res);
        });
      } else {
        // Add new task
        const newTask = this.AddTask.value;
        this.taskservice.addTask(newTask).subscribe(y => {
          console.log(y);
        });
        this._dialogRef.close(true);
        this.AddTask.reset();
      }
    }
  }
  onNoClick() {
    this._dialogRef.close(true);
  }

}



