import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {Home2Component} from "./home/home2.component";
import {Home3Component} from "./home/home3.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by zhang on 17-6-22.
 */
export const routes: Routes =
  [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'home/home2', component: Home2Component },
    { path: 'home/home2/home3', component: Home3Component },
  ];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
