import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [LogInComponent],
    exports: [
        LogInComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class LoginModule { }
