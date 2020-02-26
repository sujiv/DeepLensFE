import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCameraComponent } from './main-camera/main-camera.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [MainCameraComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ]
})
export class CameraModule { }
