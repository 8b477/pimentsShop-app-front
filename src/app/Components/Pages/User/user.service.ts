import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient : HttpClient) { }

  private baseUrl : string = "https://localhost:7263/api/"

  // POST NEW USER
  AddUser(newUser: string): Observable<any>
  {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._httpClient.post(this.baseUrl + "User", newUser, { headers: headers, responseType: 'json' });
  }
  
}
