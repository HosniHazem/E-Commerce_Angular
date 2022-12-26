import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectInputGroup} from "../../00-base/models/select.model";
import {InputGroup} from "../../00-base/models/input.model";

@Component({
  selector: 'c-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchInput= new InputGroup('search','text','','search','searchInput','search for a product...')
  selectInput = new SelectInputGroup('selectInput', 'Select', 'select', [
    {
      id: '0',
      value: "Hey"
    },
    {
      id: '0',
      value: "Hey"
    },
    {
      id: '0',
      value: "Hey"
    },
  ])

  constructor() {
  }

  ngOnInit(): void {
  }


}
