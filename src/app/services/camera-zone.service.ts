import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraZoneService {

  constructor() { }

  getCameraSummary(){
    return [
      {
        id:1,
        threats:0,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },
      {
        id:2,
        threats:1,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },{
        id:3,
        threats:3,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },{
        id:4,
        threats:0,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },{
        id:5,
        threats:0,
        timestamp:"20/02/2020 10.34.14PM",
        active:false,
        frame:null
      }
    ]
  }
}
