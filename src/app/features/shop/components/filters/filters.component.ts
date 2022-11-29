import { Component, OnInit } from '@angular/core';
import { Bem } from 'src/app/shared/functions/bem';
import {InputGroup} from "../../../../shared/components/00-base/models/input.model";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  // Base Class
  baseClass = 'filters';

  // Dom Variables
  isOpen = false;

  // Filters
  filters=[
    {
      filterTitle: 'Color',
      values:[
        new InputGroup('','checkbox','Red','redColor','redColor',''),
        new InputGroup('','checkbox','Blue','blueColor','blueColor',''),
        new InputGroup('','checkbox','Purple','purpleColor','purpleColor',''),
        new InputGroup('','checkbox','Green','greenColor','greenColor',''),
        new InputGroup('','checkbox','Yellow','yellowColor','yellowColor',''),
      ]
    },
    {
      filterTitle: 'Sizes',
      values:[
        new InputGroup('','checkbox','Red','redColor','redColor',''),
        new InputGroup('','checkbox','Blue','blueColor','blueColor',''),
        new InputGroup('','checkbox','Purple','purpleColor','purpleColor',''),
        new InputGroup('','checkbox','Green','greenColor','greenColor',''),
        new InputGroup('','checkbox','Yellow','yellowColor','yellowColor',''),
      ]
    },
    {
      filterTitle: 'Color',
      values:[
        new InputGroup('','checkbox','Red','redColor','redColor',''),
        new InputGroup('','checkbox','Blue','blueColor','blueColor',''),
        new InputGroup('','checkbox','Purple','purpleColor','purpleColor',''),
        new InputGroup('','checkbox','Green','greenColor','greenColor',''),
        new InputGroup('','checkbox','Yellow','yellowColor','yellowColor',''),
      ]
    },
  ]
  filterMenuIsOpen = false;
  constructor(public bem :Bem) { }

  ngOnInit(): void {
  }

  toggleMobilePanel(){
    this.isOpen =!this.isOpen;
  }

  toggleFilterMenu(id: number){
    this.filterMenuIsOpen = !this.filterMenuIsOpen;
  }

}
