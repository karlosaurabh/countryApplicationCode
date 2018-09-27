import { Component, OnInit } from '@angular/core';

//IMPORTING TOSTOR
import { ToastrService } from 'ngx-toastr';
import {Router,ActivatedRoute} from '@angular/router';

//IMPORTING SERVICE
import {MapserviceService} from '../mapservice.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  public currentCountry;
  constructor(
    private _tostor:ToastrService,
    public router:Router,
    public mapserviceService: MapserviceService,
    private ActivatedRoute: ActivatedRoute,
    public location:Location
  ) { }

  ngOnInit() {
    console.log("ngOnInit country detail called")
  

  //getting the blog id from the route 
  let getCountryCallingCodes = this.ActivatedRoute.snapshot.paramMap.get('callingCodes');
  console.log("the" + getCountryCallingCodes);
  
// single country details code here
  this.mapserviceService.getSingleCountryInformation(getCountryCallingCodes).subscribe(
    (data) => {
      console.log(data);
      this._tostor.success('Single country opened successfully');
      this.currentCountry = data;
    },
    error => {
      console.log("some error occured");
      console.log(error.errorMessage)
    }
  )
  console.log(this.currentCountry);
  console.log("Single country OnInit function called is here");
// single country details end code here
}
public goBackToPreviousPage(): any {
  this.location.back();
}//goBackToPreviousPage

public goToRegion:any = () =>{
  this.router.navigate(['\region']);
}//goToRegion

}
