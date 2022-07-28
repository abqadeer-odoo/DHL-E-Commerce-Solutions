import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http: HttpClient) { }
  AddServiceProvider(data: any) {
    return this.http.post(
      `https://api-sandbox.dhlecs.com/shipping/v4/products`,{
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }
}
