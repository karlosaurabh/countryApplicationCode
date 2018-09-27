import { Injectable } from '@angular/core';

//IMPORTING TOSTOR
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

//IMPORTINGH HTTPCLIENT
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class MapserviceService {
  public allRegion = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  public baseUrl = "https://restcountries.eu/rest/v2/";

  constructor(
    private _tostor: ToastrService,
    public router: Router,
    public http: HttpClient,
  ) {
    console.log("Service constructor called here");
  }

  public getAllCountry: any = (reginName) => {
    //public getAllCountry(reginName): Observable<any[]>{
    console.log("service reginName " + reginName);
    return (this.http.get(this.baseUrl + "region/" + reginName))
    // console.log("service " + this.getCountryDetails);
    // return(getCountryDetails);
  }

  public getSingleCountryInformation: any = (callingCodes) => {
    let getCountry = this.http.get(this.baseUrl + 'callingcode/' + callingCodes)
    console.log(getCountry);
    return (getCountry);
  }//getAllCountry

  public getAllCurry: any = (getCurry) => {
    console.log("Currency " + getCurry);
    return (this.http.get(this.baseUrl + "currency/" + getCurry));
  }//getAllCurry

  public getLang: any = (getLang) => {
    console.log("Language " + getLang);
    return (this.http.get(this.baseUrl + "lang/" + getLang));
  }//getgetLang

  public goToRegion:any = () =>{
    this.router.navigate(['\region']);
  }//goToRegion

}
