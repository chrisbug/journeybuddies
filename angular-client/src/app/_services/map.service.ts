import { AuthenticationService } from './authentication.service';
import { Injectable, group } from '@angular/core';
// import { Marker } from '@agm/core/services/google-maps-types';
import { Marker } from '../_models/Marker';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class MapService {
  url: string;
  constructor(private httpService: HttpClient,
    private authenticationService: AuthenticationService) {
    this.url = this.authenticationService.getUrl();
    }

  getMarkers(groupId: string, userId: string) {
    const headers = new HttpHeaders({
      'token': this.authenticationService.getToken(),
      'groupid': groupId,
      '_id': userId
    });
    // Hit endpoint to get the group marker
    return this.httpService.get(this.url + 'getmeetingpoint',
    { headers: headers });
  }

  setMarkers(marker: any, groupId: string, userId: string) {
    return this.httpService.post(this.url + 'setmeetingpoint',
      { token: this.authenticationService.getToken(), _id: userId, groupid: groupId, marker: marker });
    // localStorage.setItem('marker', JSON.stringify(marker));
  }

}
