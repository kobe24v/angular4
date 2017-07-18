/**
 * Created by zhang on 17-7-18.
 */
import {NgModule} from "@angular/core";
import {Address2Component} from "./address.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BusyModule} from "angular2-busy";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
    Address2Component
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    BusyModule,
  ],
  exports: [
    Address2Component
  ]
})
export class AddressModule {}
