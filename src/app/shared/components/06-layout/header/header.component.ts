import {Component, OnInit} from '@angular/core';
import {Bem} from "../../../functions/bem";
import { InputGroup } from '../../00-base/models/input.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Base Class
  baseClass = "header";

  // Search Input
  searchInput= new InputGroup('search','text','','searchInput','searchInput',"search for you product..");

  // Dom Variables
  isOpen: boolean = false;
  
  // FlyoutMenu
  flyoutMenu={
    title: 'Categories',
    categories:[
      {
        url: '#',
        label:'Category',
      },
      {
        url: '#',
        label:'Category',
      },
      {
        url: '#',
        label:'Category',
      },
      {
        url: '#',
        label:'Category',
      },
      {
        url: '#',
        label:'Category',
      },
    ]
  }

  constructor(public bem: Bem) {
  }

  ngOnInit(): void {
  }

}
