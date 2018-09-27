import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { RegionComponent } from './region/region.component';
import { ShareComponent } from './sharedModule/share/share.component';

//ROUTING IMPORTING
import { Router, RouterModule } from '@angular/router';

//TOASTOR USED HERE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//IMPORTING SERVICE
import { MapserviceService } from './mapservice.service';

//IMPORTING HTTTP
import { HttpClientModule } from '@angular/common/http';
import { AllCountryComponent } from './all-country/all-country.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    ShareComponent,
    AllCountryComponent,
    CountryDetailComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
    }), // ToastrModule added
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: "region" },
      { path: 'region', component: RegionComponent },
      { path: 'country', component: AllCountryComponent },
      { path: 'country/:regionName', component: AllCountryComponent },
      { path: 'countryDetail/:callingCodes', component: CountryDetailComponent },
      { path: 'countryDetail/currency/:getcode', component: AllCountryComponent },
      { path: '**', component: RegionComponent }
    ])
  ],
  providers: [MapserviceService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

