import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {
  transform(tasks: any[], searchText: string): any[] {
    if (!tasks || !searchText) {
      return tasks;
    }
    searchText = searchText.toLowerCase();
    return tasks.filter(task => task.title.toLowerCase().includes(searchText)||task.description.toLowerCase().includes(searchText)||task.status.includes(searchText));
  }


}
