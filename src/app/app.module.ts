import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarsComponent } from './components/cars/cars.component';
import {RouterModule,Routes} from "@angular/router";
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import {CarsService} from "./providers/cars.service";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id', component: CardetailsComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: '**', component: CarsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


