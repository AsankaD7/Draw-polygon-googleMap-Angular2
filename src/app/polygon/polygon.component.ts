import { Component, OnInit, EventEmitter } from '@angular/core';
import { SebmGoogleMap, SebmGoogleMapPolygon, LatLngLiteral ,PolyMouseEvent} from 'angular2-google-maps/core';

@Component({
  selector: 'app-polygon',
  styles: [`
   .sebm-google-map-container {
  height: 500px;
  }
`],
  template: `
  <div>
  <button (click)="centerChange()">click</button>
  </div>
 <div class="semb-map-container"> 
   <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="10"  (mapClick)="mapsClick($event)">
     <sebm-map-polygon [(paths)]="mypaths"
      [polyDraggable]="true"
      [editable]="true"
      [strokeColor]="ab2567"
     >
     </sebm-map-polygon>
   </sebm-google-map>
   </div>
   {{paths}}
 `
})
export class PolygonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  lat: number = 0;
  lng: number = 10;
  zoom: number = 10;

mypaths: Array<LatLngLiteral> = []

  centerChange(){
    // this.lat = 50;
    // this.lng = 60;
    this.mypaths.pop();
  }

  


  mapsClick(e) {
    var item =  <LatLngLiteral> {lat: e.coords.lat,lng: e.coords.lng };
    this.mypaths=[...this.mypaths,item]
    // this.mypaths.push(item);  
     console.log(this.mypaths);
  }  
}
