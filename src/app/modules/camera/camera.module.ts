import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCameraComponent } from './main-camera/main-camera.component';
import {NzLayoutModule} from 'ng-zorro-antd';
import { ThreatComponent } from './threat/threat.component';
import { CameraEventComponent } from './camera-event/camera-event.component';



@NgModule({
  declarations: [MainCameraComponent, ThreatComponent, CameraEventComponent],
  imports: [
    CommonModule,
    NzLayoutModule
  ]
})
export class CameraModule { }
