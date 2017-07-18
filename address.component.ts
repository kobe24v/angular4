/**
 * Created by zhang on 17-6-29.
 */
import {Component, ElementRef, ViewChild, Renderer2, OnInit, Input} from '@angular/core';
import {AddressService} from './address.service';
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {
  private busy: Subscription;
  private address = '';
  private addressId = '';
  private show = false;
  private selectedCity = false;
  private selectedCount = false;
  private selectedStreet = false;
  private prov = '请选择';
  private city = '请选择';
  private county = '请选择';
  private street = '请选择';
  @Input() private provDic = [];
  @Input() private cityDic = [];
  @Input() private countDic = [];
  @Input() private streetDic = [];
  @ViewChild('t') tab: any;
  constructor(private addressService: AddressService) {}
  ngOnInit() {
    const url = '/systemsetting/address/getchildrenbyaddresslevel/0'; // 查询省份url
    this.addressService.get(url, '').subscribe(
      response => { this.provDic = response},
      error => {console.log(error)}
    )
  }

  showon() {
    this.show = true;
    if (this.addressId === '') {
      this.selectedCity = false;
      this.selectedCount = false;
      this.selectedStreet = false;
      this.city = '请选择';
      this.county = '请选择';
      this.street = '请选择';
    }
  }

  showoff() {
    setTimeout(() => this.show = false, 300);
  }

  selectProv($event) {
    this.prov = $event.target.innerHTML;
    setTimeout(() => this.tab.select('tab2'));
    const url = '/systemsetting/address/getchildrenbycodeparent/' + $event.target.id; // 查询市的url
    this.busy = this.addressService.get(url, '').subscribe(
      response => {this.cityDic = response},
      error => {console.log(error)}
    )
    this.selectedCity = true;
    this.city = '请选择';
    this.selectedCount = false;
    this.selectedStreet = false;
  }
  selectCity($event) {
    this.city = $event.target.innerHTML;
    setTimeout(() => this.tab.select('tab3'));
    const url = '/systemsetting/address/getchildrenbycodeparent/' + $event.target.id; // 查询区的url
    this.busy = this.addressService.get(url, '').subscribe(
      response => {this.countDic = response},
      error => {console.log(error)}
    )
    this.selectedCount = true;
    this.county = '请选择';
    this.selectedStreet = false;
  }
  selectCount($event) {
    this.county = $event.target.innerHTML;
    setTimeout(() => this.tab.select('tab4'));
    const url = '/systemsetting/address/getchildrenbycodeparent/' + $event.target.id; // 查询街道url
    this.busy = this.addressService.get(url, '').subscribe(
      response => {this.streetDic = response},
      error => {console.log(error)}
    )
    this.selectedStreet = true;
    this.street = '请选择';
  }
  selectStreet($event) {
    this.street = $event.target.innerHTML;
    this.showoff();
    this.address = this.prov + this.city + this.county + this.street;
    this.addressId = $event.target.id;
  }
}
