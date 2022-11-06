import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input('icon') icon: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
