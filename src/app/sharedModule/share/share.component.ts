import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges, OnChanges } from '@angular/core';

//IMPORTING TOSTOR
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MapserviceService } from '../../mapservice.service';

import { Location } from '@angular/common';
import { elementStyleProp } from '@angular/core/src/render3/instructions';

//IMPORTING SERVICE


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit, OnChanges {

  @Input() public allCountry;
  @Input() public countryCurrencyData;
  @Input() public countryLangData;
  @Output() notifyLang: EventEmitter<string> = new EventEmitter<string>();

  @Output() notifyCurrency: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _tostor: ToastrService,
    public router: Router,
    public mapserviceService: MapserviceService,

  ) {
    console.log("Share constructor called here");
  }

  ngOnInit() {
    console.log("Share ngOnInit called here");
    console.log("share karo " + this.allCountry)
  }

  getCurrency(data: string) {
    this.notifyCurrency.emit(data);
    console.log("share currency hai " + data);
  }

  getLang(data:string){
    this.notifyLang.emit(data);
    console.log("share language hai " + data);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let prop in changes) {
      if (prop === 'countryLangData') {
        console.log('this is prop', changes[prop].currentValue);
        this.allCountry = changes[prop].currentValue;
      } else if (prop === 'countryCurrencyData') {
        console.log('this is prop 2', changes[prop].currentValue);
        this.allCountry = changes[prop].currentValue;
      }
    }
    
  }//ngOnChanges



}
