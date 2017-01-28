import { Component } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
   <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom"
   (mapClick)="mapsClick($event)"

   >
   </sebm-google-map>
 `
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: Number = 10;


  mapsClick(e) {
    type MyArrayType = Array<{lat: string, lng: string}>;
    
    var arr: MyArrayType = [
    {lat: e.coords.lat, lng: e.coords.lng},
];
    console.log("HELLO", arr);
   arr.forEach(function(element) {
    console.log(element.lat);
});
  }
}
