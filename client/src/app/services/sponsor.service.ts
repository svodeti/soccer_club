import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8084/api/sponsors';

@Injectable({
  providedIn: 'root'
})

export class SponsorService {

  constructor(private http: HttpClient) { }

  retrieveList() {
    return this.http.get(baseUrl+'/retrieve');
  }

  createSponsor(data) {
    return this.http.post(baseUrl+'/create', data);
  }

}
