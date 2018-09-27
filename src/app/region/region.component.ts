import { Component, OnInit } from '@angular/core';

//IMPORTING TOSTOR
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

//IMPORTING SERVICE
import {MapserviceService} from '../mapservice.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
public allRegion = this.mapserviceService.allRegion;
  constructor(
    private _tostor:ToastrService,
    public router:Router,
    public mapserviceService: MapserviceService,
    private location:Location
    ) { }

  ngOnInit() {

    setTimeout(() => {
    this._tostor.success("Region Constructor called, hello");
    
      });

}//ng OnInit end here



getAllCountry(region){
  this.router.navigate(['\country',region])
  //alert(region);
  
}//getAllCountry end here

}