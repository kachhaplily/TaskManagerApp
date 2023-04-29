import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import {ThemePalette} from '@angular/material/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { AddtaskComponent } from 'src/app/Components/AddTask/addtask/addtask.component';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  selectControl = new FormControl();
  searchQuery: string = '';
  selectedOption: string = '';
  selectiondate:string='';

  colorControl = new FormControl('primary' as ThemePalette);
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortDropdown: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortDate:EventEmitter<string>=new EventEmitter<string>();

  constructor(public dialog: MatDialog){}
  onSearchClick() {
    this.search.emit(this.searchQuery);
  }
  handleSearchTextChange() {
    this.search.emit(this.searchQuery);
  }
  onDateSort(event:MatSelectChange) {
    this.selectiondate=event.value;
    this.sortDate.emit(this.selectiondate);
  }
  onSortSelect(event: MatSelectChange) {
    this.selectedOption = event.value;
    this.sortDropdown.emit(this.selectedOption);

  }
  openDialog() {
    this.dialog.open(AddtaskComponent, {
     width:'500px',
     position: {
      top: '4%',
      left: '0'
    }
    });
  }

}
