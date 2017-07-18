import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import {AddressService} from './address/address.service';
import * as FileSaver from 'file-saver';
import {Http, RequestOptions, Headers, ResponseType} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // title = 'app';
  // constructor(private breadcrumbService: BreadcrumbService,
  //             private addressService: AddressService) {
  //   breadcrumbService.addFriendlyNameForRoute('/home', 'home');
  //   breadcrumbService.addFriendlyNameForRoute('/home/users', 'All users');
  //   breadcrumbService.addFriendlyNameForRouteRegex('/home/users/[0-9]/info', 'Information');
  //   breadcrumbService.addCallbackForRoute('/home/users/1', this.getNameForUser);
  //   breadcrumbService.addCallbackForRouteRegex('^/home/users/[0-9]$', this.getNameForUser);
  // }
  // getNameForUser(id: string): string {
  //   return 'specific name for user with id';
  // }

  private infoCheck = true;
  private tumCheck = true;
  private pacCheck = true;
  private pathoCheck = true;
  private opsCheck = true;
  private chemoCheck = true;
  private radioCheck = true;

  constructor(private addressService: AddressService,
              private http: Http) {}
  public selectedItems1: any = null;

  items= [
    { id: 1, text: 'item 1'},
    { id: 2, text: 'item 2'},
    { id: 3, text: 'item 3'},
    { id: 4, text: 'item 4'},
    { id: 5, text: 'item 5'},
  ];

  download() {
    let thefile = {};
    const data = [];
    data.push('info:' + this.infoCheck);
    data.push('tum:' + this.tumCheck);
    data.push('pac:' + this.pacCheck);
    data.push('patho:' + this.pathoCheck);
    data.push('ops:' + this.opsCheck);
    data.push('chemo:' + this.chemoCheck);
    data.push('radio:' + this.radioCheck);
    const url = 'http://localhost:8888/mdt/v1/registrationsys/patient/exportcsv/0000489765/' + data;
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/octet-stream' });
    let options = new RequestOptions({ headers: headers, responseType: 2 });
    this.http.get(url, options).subscribe(
      data => {
        thefile = new Blob([data.arrayBuffer()], {type: 'application/octet-stream'});
        const urls = window.URL.createObjectURL(thefile);
        window.open(urls, "_blank");
        // FileSaver.saveAs(thefile, 'fff.zip');
          }
    );
    // this.addressService.get('/registrationsys/patient/export/0000489765', '').subscribe(
    //   res => {console.log(res)},
    //   error => {console.log(error)}
    // )

  }

}
