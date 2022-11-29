import { Component, OnInit } from '@angular/core';
import { Bem } from 'src/app/shared/functions/bem';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

// Base Class
baseClass= 'category-page';

  constructor(public bem: Bem) { }

  ngOnInit(): void {
  }

}