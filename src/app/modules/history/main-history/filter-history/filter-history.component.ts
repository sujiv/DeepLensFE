import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter-history',
  templateUrl: './filter-history.component.html',
  styleUrls: ['./filter-history.component.css']
})
export class FilterHistoryComponent  {

//  // OnInit contactName = '';
//  //  contactAddress = '';
//  //  contactSource = 'direct';
//  //  contactGender = 'male';
//  //  isDeleted = false;
//  //  date = new FormControl(new Date());
//  //
//  //  constructor() {
//  //  }
//  //
//  //  ngOnInit(): void {
//  //  }
//  //
//  // public filterHistory() {}
// //////////////////////////////////
//
//   title = 'ng-calendar-demo';
//   selectedDate = new Date('2019/09/26');
//   startAt = new Date('2019/09/11');
//   minDate = new Date('2019/09/14');
//   maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
//   year: any;
//   DayAndDate: string;
//
//   constructor() {
//     this.onSelect(this.selectedDate);
//   }
//
//   onSelect(event) {
//     console.log(event);
//     this.selectedDate = event;
//     const dateString = event.toDateString();
//     const dateValue = dateString.split(' ');
//     this.year = dateValue[3];
//     this.DayAndDate = dateValue[0] + ',' + ' ' + dateValue[1] + ' ' + dateValue[2];
//   }
//
//   myDateFilter = (d: Date): boolean => {
//     const day = d.getDay();
//     // Prevent Saturday and Sunday from being selected.
//     return day !== 0 && day !== 6 ;
//   }
  filter() {
    console.log();
  }
}
