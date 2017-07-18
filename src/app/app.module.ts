import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {Home2Component} from "./home/home2.component";
import {Home3Component} from "./home/home3.component";
import {Ng2BreadcrumbModule} from "ng2-breadcrumb/bundles/app.module";
import {BreadcrumbService} from "ng2-breadcrumb/bundles/components/breadcrumbService";
import {appRoutingProviders, routing} from "./app.route";
import {ScrollableComponent} from "./scrollable/scrollable.component";
import {NguiScrollableModule} from "@ngui/scrollable";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AnimationComponent} from "./animation/animation.component";
import {AddressComponent} from "./address/address.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TabsModule} from "ngx-bootstrap";
import {AddressService} from "./address/address.service";
import {Http, HttpModule} from "@angular/http";
import {Address2Component} from "./address2/address.component";
import {NgxTreeSelectModule} from "ngx-tree-select";
import {FormsModule} from "@angular/forms";
import 'hammerjs';
import {InputFormExample} from "./form/form.component";
import {MdInputModule, MdProgressBarModule, MdProgressSpinnerModule, MdSelectModule} from "@angular/material";
import {ProgressSpinnerComponent} from "./progress-spinner/progress-spinner.component";
import {ProgressBarComponent} from "app/progress-bar/progress-bar.component";
import {BusyModule} from "angular2-busy";
import {AddressModule} from "./address2/address.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    Home3Component,
    ScrollableComponent,
    AnimationComponent,
    AddressComponent,
    InputFormExample,
    ProgressSpinnerComponent,
    ProgressBarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    Ng2BreadcrumbModule,
    routing,
    HttpModule,
    NguiScrollableModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    NgxTreeSelectModule.forRoot([]),
    MdInputModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    BusyModule,
    AddressModule
  ],
  providers: [BreadcrumbService,
            appRoutingProviders,
            AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
