import {Component, Host, Input, OnInit} from '@angular/core';
import {SidebuttonsComponent} from "../sidebuttons/sidebuttons.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sbutton',
  templateUrl: './sbutton.component.html',
  styleUrls: ['./sbutton.component.css']
})
export class SbuttonComponent implements OnInit {
  @Input() pgId: number;
  @Input() url: string = "/";
  @Input() src: string[] = ["",""];
  clicked:boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.src[0]);
  }

  setClass() {
    if(this.router.url==this.url)
      this.clicked = true;
    else{
      this.clicked = false;
    }
    let classes = {
      'link': true,
      'clicked': this.clicked
    }

    return classes;
  }

  setSrc(){
    if(this.clicked)
      return this.src[1]
    return this.src[0];
  }

  setUrl(){
    return this.url;
  }

  onClick() {
    this.clicked = true;
    console.log("Clicked! routing to.."+this.url);
  }
}