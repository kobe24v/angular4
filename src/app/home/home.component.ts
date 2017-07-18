/**
 * Created by zhang on 17-6-22.
 */
import {Component, OnInit} from '@angular/core';
import {AddressService} from "../address/address.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home2',
  template: `<app-address2 [provDic]="provDic" [cityDic]="cityDic" [countDic]="countDic" [streetDic]="streetDic"
            (event)="select($event)" [model]="model" [busy]="busy"></app-address2>`,
})
export class HomeComponent implements OnInit {
  private busy: Subscription;
  private provDic =  [];
  private cityDic = [];
  private countDic = [];
  private streetDic = [];
  private model = {'id': '', 'value': ''};
  private url = '/systemsetting/address/getchildrenbycodeparent/';

  constructor(private addressService: AddressService) {}
  ngOnInit() {
    const url = '/systemsetting/address/getchildrenbyaddresslevel/0'; // 查询省份url
    this.busy = this.addressService.get(url, '').subscribe(
      response => { this.provDic = response.data;
      console.log(this.provDic)},
      error => {console.log(error)}
    )
  }
  select($event) {
    if ($event.level === '0') {
      this.busy = this.addressService.get(this.url + $event.id, '').subscribe(
        response => { this.cityDic = response.data},
        error => {console.log(error)}
      )
    }else if ($event.level === '1') {
      this.busy = this.addressService.get(this.url + $event.id, '').subscribe(
        response => { this.countDic = response.data},
        error => {console.log(error)}
      )
    }else if ($event.level === '2') {
      this.busy = this.addressService.get(this.url + $event.id, '').subscribe(
        response => { this.streetDic = response.data},
        error => {console.log(error)}
      )
    }else {
      this.model.id = $event.id;
      this.model.value = $event.value;
    }
  }
}
