import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {    
  private serverURL : string = 'http://localhost:3233/api';

  constructor(
    private http : HttpClient
  ) {    
   }

  testGet() {
    return this.http.get(this.serverURL + '/values');
  }
}
