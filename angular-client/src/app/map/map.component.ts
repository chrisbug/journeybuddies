import { User } from './../_models/user';
import { UserService } from './../_services/user.service';
import { MapService } from '../_services/map.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';
import { getHostElement } from '@angular/core/src/render3';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-maps',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = '';
  markerLat: number;
  markerLng: number;
  changeMeetingPoint = false;
  marker: any;
  groupId: string;
  token: string;
  userId: string;

  constructor(private mapService: MapService,
    private userService: UserService,
    private authenticationService: AuthenticationService ) {}

  ngOnInit() {
    this.groupId = this.userService.getGroup();
    this.token = this.authenticationService.getToken();
    this.userId = this.userService.getCurrentUserId();
    this.title = this.userService.getCurrentGroupName();
    this.mapService.getMarkers(this.groupId, this.userId).subscribe( response => {
      console.log(response);
      this.marker = response;
    });
    if (this.marker) {
      this.markerLat = this.marker.lat;
      this.markerLng = this.marker.lng;
    } else {
      if (navigator.geolocation) {
        this.findMe();
      }
    }
  }

  mapClicked($event: any) {
    if (this.changeMeetingPoint) {
      console.log($event);
      this.markerLat = $event.coords.lat;
      this.markerLng = $event.coords.lng;
      const newMarker = {
        name: 'Meeting Point',
        lat: $event.coords.lat,
        lng: $event.coords.lng
      };
      this.marker = newMarker;
      this.mapService.setMarkers(newMarker, this.groupId, this.userId).subscribe();
    }
  }

  markerClicked(marker: Marker) {
    console.log('Clicked marker ' + marker.name );
    this.markerLat = marker.lat;
    this.markerLng = marker.lng;
    this.title = marker.name;
  }

  meetUpChange() {
    this.changeMeetingPoint = !this.changeMeetingPoint;
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showPosition(position) {
    this.markerLat = position.coords.latitude;
    this.markerLng = position.coords.longitude;
  }


}

interface Marker {
  name?: string;
  lat: number;
  lng: number;
}
