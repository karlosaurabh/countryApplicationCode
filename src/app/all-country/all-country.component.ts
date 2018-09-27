import { Component, OnInit, Input, Output } from '@angular/core';

//IMPORTING TOSTOR
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

//IMPORTING SERVICE
import { MapserviceService } from '../mapservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent implements OnInit {
  public allCountry;
  countryCurrencyData: any;
  countryLangData: any;
  getReginName: string;

  constructor(
    private _tostor: ToastrService,
    public router: Router,
    public mapserviceService: MapserviceService,
    private ActivatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.getReginName = this.ActivatedRoute.snapshot.paramMap.get('regionName') ? this.ActivatedRoute.snapshot.paramMap.get('regionName') : '';
    console.log("country", this.getReginName);


    let data = this.mapserviceService.getAllCountry(this.getReginName).subscribe(
      (data) => {
        data.map(getData => console.log("sa tyt" + getData));
        this.allCountry = data;

      },
      (error) => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    );
    console.log("All Region name " + this.allCountry);

  }
  //onInit end here

  //for currency
  getCurrency(currency) {
    let currencyGet = currency.code;
    this.mapserviceService.getAllCurry(currencyGet).subscribe(data => {
      this.countryCurrencyData = data;

    })
    console.log("subscribe " + this.countryCurrencyData)
  }

  //for language

  getLang(lang) {
    let langGet = lang.iso639_1;
    this.mapserviceService.getLang(langGet).subscribe(data => {
    this.countryLangData = data;

    })
    console.log("subscribe language");
    console.log(this.countryLangData)
  }//getLang

  public goBackToPreviousPage(): any {
    this.location.back();
  }//goBackToPreviousPage

  public goToRegion:any = () =>{
    this.router.navigate(['\region']);
  }//goToRegion

}
