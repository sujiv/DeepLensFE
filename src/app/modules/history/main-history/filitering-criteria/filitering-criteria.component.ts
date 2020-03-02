import {OnInit, Output} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ThreatsSummary} from '../../../../models/threats-summary';
import {Threat} from '../../../../models/threat';
import {DatePipe} from '@angular/common';
import {HistoryService} from '../../../../services/history.service';

//
// @Component({
//   selector: 'app-filitering-criteria',
//   templateUrl: './filitering-criteria.component.html',
//   styleUrls: ['./filitering-criteria.component.css']
// })
export class FiliteringCriteriaComponent {
//   visible = true;
//   selectable = true;
//   removable = true;
//   addOnBlur = true;
//   myStartDate: string;
//   myEndDate: string;
//   myForm: FormGroup;
//   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
//   pipe;
//   now;
//   mySmpleFormatStartDate;
//   mySmpleFormatEndDate;
//   myShortFormat: Date;
//
//   constructor(public fb: FormBuilder, private historyService: HistoryService) {
//     this.pipe = new DatePipe('en-US');
//     this.now = Date.now();
//     this.myShortFormat = this.pipe.transform(this.now, 'MM/dd/yyyy');
//     this.myShortFormat = this.pipe.transform(this.now, 'short');
//   }
//
//   // tslint:disable-next-line:use-lifecycle-interface
//   ngOnInit(): void {
//     this.reactiveForm();
//   }
//
//   /* Reactive form */
//   reactiveForm() {
//     this.myForm = this.fb.group({
//       startDate: ['', [Validators.required]],
//     });
//   }
//
//   /* Date */
//   startDate(e) {
//     this.myStartDate = new Date(e.target.value).toISOString().substring(0, 10);
//     this.myShortFormat = this.pipe.transform(new Date(e.target.value), 'short');
//     // this.myStartDate =
//     this.myForm.get('startDate').setValue(this.myStartDate, {
//       onlyself: truee
//     });
//     this.mySmpleFormatStartDate = this.myStartDate;
//     console.log(this.myShortFormat);
//   }
//
//   /* Handle form errors in Angular 8 */
//   // public errorHandling = (control: string, error: string) => {
//   //   return this.myForm.controls[control].hasError(error);
//   // }
//
//   submitForm() {
//     console.log(this.myForm.value);
//   }
//
//   endDate(e) {
//     this.myEndDate = new Date(e.target.value).toISOString().substring(0, 10);
//     this.myForm.get('startDate').setValue(this.myEndDate, {
//       onlyself: true
//     });
//     console.log(this.myEndDate);
//     this.mySmpleFormatEndDate = this.myEndDate;
//   }
//   // filterThreatsHistryByDate() {
//   //   this.historyService.getFilteredHistory(this.myStartDate, this.myEndDate);
//   // }
}
