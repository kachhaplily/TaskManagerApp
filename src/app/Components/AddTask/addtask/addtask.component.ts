import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from 'src/app/Services/TaskService/task-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {

  priorityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ];
  taskStatus: string[] = ['Todo', 'inProgress', 'Completed'];
  formVisible = true;

  AddTask!: FormGroup;
  constructor(private formBuilder: FormBuilder, private taskservice: TaskServiceService,) {
    this.AddTask = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.min(2)])],
      description: ['', Validators.compose([Validators.required])],
      priority: ['', Validators.compose([Validators.required])],
      dueDate: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]

    })
  }
  onSubmit() {
    if (this.AddTask.valid) {
      this.taskservice.addTask(this.AddTask.value).subscribe(y => console.log(y))
      console.log(this.AddTask.value)
      this.AddTask.reset();

    }
  }
  toggleForm() {
    this.formVisible = !this.formVisible;
  }
}



