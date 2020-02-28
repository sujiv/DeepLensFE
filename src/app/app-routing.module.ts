import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainCameraComponent} from './modules/camera/main-camera/main-camera.component';
import {MainHistoryComponent} from './modules/history/main-history/main-history.component';
import {MainZonesComponent} from './modules/zones/main-zones/main-zones.component';


const routes: Routes = [
  {path: 'plants', component: MainZonesComponent},
  {path: '', component: MainZonesComponent},
  {path: 'plants/:pid', component: MainZonesComponent},
  {path: 'plants/:pid/zones/:zid', component: MainZonesComponent},
  {path: 'plants/:pid/zones/:zid/cameras/:cid', component: MainCameraComponent},
  {path: 'plants/:pid/zones/:zid/cameras/:cid', component: MainCameraComponent},
  {path: 'history', component: MainHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
