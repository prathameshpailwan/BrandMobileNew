import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {

  constructor(private http:HttpClient) { }

  GetAccessory(){
debugger
    let url = environment.BrandMobile + 'api/MobileController/GetAccesories'
    return this.http.get(url).pipe(map(x => x));
  }
}
