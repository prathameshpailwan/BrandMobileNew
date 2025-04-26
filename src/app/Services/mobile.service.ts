import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http : HttpClient) { }

  AddTypeColourComapny(Model){
    debugger
    let data ={
      //UserId : 1 ,
      MobileType : Model.Type || null,
      MobileTypeId : Model.TypeId || null,
       CompanyName : Model.Company || null,
      MobileCompanyId : Model.CompanyId || null,
      MobileColour : Model.Colour || null,
      MobileColourId : Model.ColourId || null, 
      Ram : Model.Ram || null, 
      RamId : Model.RamId || null, 
      Rom : Model.Rom || null,  
      RomId : Model.RomId || null, 
      Input : Model.Input 
    }
    let url = environment.BrandMobile + 'api/MobileController/AddTypeCompanyColour'

    return this.http.post(url , data).pipe(map(x => x), take(1));
  }

  GetMobileMasterData(){
    let url = `${environment.BrandMobile}api/MobileController/GetMobileMasterData`;
    return this.http.get(url).pipe(map(x => x));
  }

  MobileModelTransaction(Model){
    debugger
    let data ={
      //UserId : 1 ,
      MobileTypeId : Model.TypeId || null,
      MobileCompanyId : Model.CompanyId || null,
      MobileColourId : Model.ColourId || null, 
      RamId : Model.RamId || null, 
      RomId : Model.RomId || null, 
      DealerPrice : Model.DealerPrice || null, 
      MOPPrice : Model.MOPPrice || null, 
      BrandPrice : Model.BrandPrice || null, 
      Model : Model.Model || null, 
      ModelId : Model.ModelId || null, 
      Input : Model.Input 
    }
    let url = environment.BrandMobile + 'api/MobileController/MobileModelTransaction'
    return this.http.post(url , data).pipe(map(x => x), take(1));
  }
}
