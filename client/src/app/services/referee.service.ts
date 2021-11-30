import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8084/api/referees';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(private http: HttpClient) { }

  retrieveList() {
    return this.http.get(baseUrl+'/retrieve');
  }

  createReferee(data) {
    return this.http.post(baseUrl+'/create', data);
  }

  updateReferee(data) {
    return this.http.put(baseUrl+'/update',data)
  }

}
