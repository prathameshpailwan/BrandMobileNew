import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  getNavigationData = () => {
    const url = `${window.location.origin}/src/assets/navigationData.json`;
    return this.http.get(url).pipe(map(x => x));
  }
}
