import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Item } from 'src/app/Models/ItemModel';
import { TaskServiceService } from 'src/app/Services/TaskService/task-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() Item!:Item;
@Output() remove: EventEmitter<number> = new EventEmitter<number>();


constructor(private taskservice: TaskServiceService){}
getColor(priority: string): string {
  if (priority === 'Low') {
    return 'blue';
  } else if (priority === 'High') {
    return 'red';
  } else {
    return 'green';
  }
}
onRemove(taskId: number): void {
  this.remove.emit(taskId);
}


}
