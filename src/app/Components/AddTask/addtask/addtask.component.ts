import { Component,Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA ,MatDialogRef} from '@angular/material/dialog';
import { TaskServiceService } from 'src/app/Services/TaskService/task-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent  implements OnInit {

  priorityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ];
  taskStatus: string[] = ['Todo', 'inProgress', 'Completed'];

  AddTask!: FormGroup;
  constructor(private formBuilder: FormBuilder, private taskservice: TaskServiceService,@Inject(MAT_DIALOG_DATA) public data: any ,   private _dialogRef: MatDialogRef<AddtaskComponent> ) {

    this.AddTask = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.min(2)])],
      description: ['' ,Validators.compose([Validators.required])],
      priority: ['', Validators.compose([Validators.required])],
      dueDate: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
    })
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
          console.log(res);
        });
      } else {
        // Add new task
        const newTask = this.AddTask.value;
        this.taskservice.addTask(newTask).subscribe(y => {
          console.log(y);
        });
        this.AddTask.reset();
      }
    }
  }
  onNoClick(){
    this._dialogRef.close(true);

}
}



