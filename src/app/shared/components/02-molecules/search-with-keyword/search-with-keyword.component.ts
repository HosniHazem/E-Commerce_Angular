import { Component, OnInit } from '@angular/core';
import {InputGroup} from "../../00-base/models/input.model";

@Component({
  selector: 'app-search-with-keyword',
  templateUrl: './search-with-keyword.component.html',
  styleUrls: ['./search-with-keyword.component.scss']
})
export class SearchWithKeywordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchInput= new InputGroup('search','text','','search','searchInput','search for a product...')

}
