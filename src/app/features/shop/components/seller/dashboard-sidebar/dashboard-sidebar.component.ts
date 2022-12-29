import { Component, OnInit } from '@angular/core';
import {SidebarElementModule} from "../../../models/sidebarElement";
import {Bem} from "../../../../../shared/functions/bem";

@Component({
  selector: 'seller-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {

  // Base Class
  baseClass: String = 'sidebar';

  constructor(public bem: Bem) { }

  ngOnInit(): void {
  }

  // SideBar Elements
  sidebarElements: SidebarElementModule[] =[
    {
      label: 'My Products',
      path:['/shop/dashboard/my-products'],
    },
    {
      label: 'My Coupon Codes',
      path: ['/shop/dashboard/my-coupons'],
    },
  ]
}
