import { Injectable } from '@angular/core';
import { Zone } from '../models/zone';
import {CameraSummary} from "../models/camera-summary";

@Injectable({
  providedIn: 'root'
})
export class CameraZoneService {

  constructor() { }

  getCameraSummary():CameraSummary[]{
    return [
      {
        id:1,
        zoneId:"zone01",
        plantId:"01",
        threats:0,
        timestamp:'20/02/2020 10.34.14PM',
        active: true,
        frame:null
      },
      {
        id:2,
        zoneId:"zone01",
        plantId:"01",
        threats:1,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },{
        id:3,
        zoneId:"zone01",
        plantId:"01",
        threats:3,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },{
        id:4,
        zoneId:"zone01",
        plantId:"01",
        threats:0,
        timestamp:"20/02/2020 10.34.14PM",
        active:true,
        frame:null
      },{
        id:5,
        zoneId:"zone01",
        plantId:"01",
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
        plantId:"1",
        plantName:"Chennai Vehicle & Engine Assembly Plant",
        zoneId:"Zone 01",
        cameraId:"camera 4",
        totalThreats:2
      },
      {
        plantId:"2",
        plantName:"Ford's Sanand Vehicle & Engine Assembly Plant",
        zoneId:"Zone 05",
        cameraId:"camera 3",
        totalThreats:4
      },
      {
        plantId:"3",
        plantName:"Silverton Assembly Plant",
        zoneId:"Zone 08",
        cameraId:"camera 4",
        totalThreats:1
      },
      {
        plantId:"4",
        plantName:"Struandale Engine Plant",
        zoneId:"Zone 10",
        cameraId:"camera 3",
        totalThreats:5
      },
      {
        plantId:"3",
        plantName:"Silverton Assembly Plant",
        zoneId:"Zone 08",
        cameraId:"camera 4",
        totalThreats:1
      },
      {
        plantId:"4",
        plantName:"Struandale Engine Plant",
        zoneId:"Zone 10",
        cameraId:"camera 3",
        totalThreats:5
      }
    ];
  }

  getPlants() {
    return [
      {
        id:"01",
        plantName:"Chennai Vehicle & Engine Assembly Plant"
      },
      {
        id:"02",
        plantName:"Ford's Sanan Vehicle & Engine Assembly Plant"
      }
    ];
  }

  getZones(id:string):Zone[]{
    let zone1 = [
      {
        zoneId:"1",
        zoneName:"Zone01",
        plantId:"01"
      },
      {
        zoneId:"2",
        zoneName:"Zone02",
        plantId:"01"
      },
      {
        zoneId:"3",
        zoneName:"Zone03",
        plantId:"01"
      }
    ];

    let zone2 = [
      {
        zoneId:"1",
        zoneName:"Zone A",
        plantId:"01"
      },
      {
        zoneId:"2",
        zoneName:"Zone B",
        plantId:"01"
      }
    ];

    switch (id) {
      case '01':
        return zone1;
      case '02':
        return zone2;
    }

    return zone2;
  }
}
