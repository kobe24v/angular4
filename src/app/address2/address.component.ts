/**
 * Created by zhang on 17-6-29.
 */
import {
  Component, ViewChild, Input, Output, EventEmitter,
} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
@Component({
  selector: 'app-address2',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class Address2Component {
  @Input() busy: Subscription;
  private show = false;
  private selectedCity = false;
  private selectedCount = false;
  private selectedStreet = false;
  private prov = '请选择';
  private city = '请选择';
  private county = '请选择';
  private street = '请选择';
  @Input() public provDic = [];
  @Input() public cityDic = [];
  @Input() public countDic = [];
  @Input() public streetDic = [];
  @Input() public model = {'id': '', 'value': ''};
  @Output() public event: EventEmitter<any> = new EventEmitter();
  @ViewChild('t') tab: any;
  constructor() {}

  showon() {
    this.show = true;
  }

  showoff() {
    setTimeout(() => this.show = false, 300);
  }

  selectProv($event) {
    this.prov = $event.target.innerHTML;
    setTimeout(() => this.tab.select('tab2'));
    this.event.emit({'id': $event.target.id, 'value': $event.target.innerHTML, 'level': '0'});
    this.selectedCity = true;
    this.city = '请选择';
    this.selectedCount = false;
    this.selectedStreet = false;
  }
  selectCity($event) {
    this.city = $event.target.innerHTML;
    setTimeout(() => this.tab.select('tab3'));
    this.event.emit({'id': $event.target.id, 'value': $event.target.innerHTML, 'level': '1'});
    this.selectedCount = true;
    this.county = '请选择';
    this.selectedStreet = false;
  }
  selectCount($event) {
    this.county = $event.target.innerHTML;
    setTimeout(() => this.tab.select('tab4'));
    this.event.emit({'id': $event.target.id, 'value': $event.target.innerHTML, 'level': '2'});
    this.selectedStreet = true;
    this.street = '请选择';
  }
  selectStreet($event) {
    this.street = $event.target.innerHTML;
    this.showoff();
    this.model.value = this.prov + this.city + this.county + this.street;
    this.event.emit({'id': $event.target.id, 'value': this.model.value, 'level': '3'});
    this.model.id = $event.target.id;
  }

}
// 地区id字符串截取
function substringId(fullid: string, no: number) {
  let id = '';
  if (fullid) {
    for (let i = 0; i < fullid.length; i++) {
      if (i >= no) {
        id += '0';
      } else {
        id += fullid.charAt(i);
      }
    }
  }
  return id;
}
