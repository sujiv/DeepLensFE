import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainCameraComponent} from './modules/camera/main-camera/main-camera.component';
import {MainHistoryComponent} from './modules/history/main-history/main-history.component';


const routes: Routes = [
  // {path: 'zones', component: CameraComponent},
  {path: 'camera', component: MainCameraComponent},
  {path: 'history', component: MainHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
