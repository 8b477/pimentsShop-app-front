import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ShopService {
  constructor(private _httpClient: HttpClient) { }

  private baseUrl : string = "https://localhost:7263/api/"

  // GET ALL ITEMS
  displayPiments(): Observable<any>
  {
    const params = new HttpParams({fromString: 'name=term'});
    return this._httpClient.request('GET', this.baseUrl + "Piments", {responseType:'json', params});
  }
}


