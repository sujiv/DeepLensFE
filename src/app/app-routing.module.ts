import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainCameraComponent} from './modules/camera/main-camera/main-camera.component';
import {MainHistoryComponent} from './modules/history/main-history/main-history.component';
import {MainZonesComponent} from './modules/zones/main-zones/main-zones.component';
import {LogInComponent} from './login/log-in/log-in.component';
import {AuthGaurdService} from './services/auth-gaurd.service';


const routes: Routes = [

  {path: 'camera', component: MainZonesComponent, canActivate: [AuthGaurdService] },
  {path: '', component: MainZonesComponent, canActivate: [AuthGaurdService]},
  {path: 'zones/:zid/cameras/:cid', component: MainCameraComponent, canActivate: [AuthGaurdService]},
  {path: 'history', component: MainHistoryComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
