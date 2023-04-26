import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }



  sortTaskbyDate(tasks: any[], selectedOption: string): any[] {
    return tasks.sort((a, b) => {
      const dateA = selectedOption === 'dueDate' ? new Date(a.dueDate).getTime() :
                   selectedOption === 'creationDate' ? new Date(a.creationDate).getTime() :
                   0; // If selectedOption is not dueDate or creationDate, set to 0
      const dateB = selectedOption === 'dueDate' ? new Date(b.dueDate).getTime() :
                   selectedOption === 'creationDate' ? new Date(b.creationDate).getTime() :
                   0; // If selectedOption is not dueDate or creationDate, set to 0

      return dateA - dateB;
    });
  }


  sortTaskByPriority(tasks: any[], selectedOption: string): any[] {
    const priorityOrder = ['Low', 'Medium', 'High'];

    return tasks.sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.priority);
      const priorityB = priorityOrder.indexOf(b.priority);

      return selectedOption === priorityOrder[0] ? priorityA - priorityB :
             selectedOption === priorityOrder[2] ? priorityB - priorityA :
             a.priority === selectedOption ? -1 :
             b.priority === selectedOption ? 1 :
             priorityA - priorityB;
    });
  }





}
