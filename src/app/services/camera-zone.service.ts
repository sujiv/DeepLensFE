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
        timestamp:'20/02/2020 10.34.14PM',
        active: true,
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

  getThreatsOverview() {
    return [
      {
        plantId:1,
        plantName:"Chennai Vehicle & Engine Assembly Plant",
        zoneId:"Zone 01",
        cameraId:"camera 4",
        totalThreats:2
      },
      {
        plantId:2,
        plantName:"Ford's Sanand Vehicle & Engine Assembly Plant",
        zoneId:"Zone 05",
        cameraId:"camera 3",
        totalThreats:4
      },
      {
        plantId:3,
        plantName:"Silverton Assembly Plant",
        zoneId:"Zone 08",
        cameraId:"camera 4",
        totalThreats:1
      },
      {
        plantId:4,
        plantName:"Struandale Engine Plant",
        zoneId:"Zone 10",
        cameraId:"camera 3",
        totalThreats:5
      }
    ];
  }
}
