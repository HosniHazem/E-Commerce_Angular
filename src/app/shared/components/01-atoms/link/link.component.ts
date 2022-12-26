import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'c-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})



export class LinkComponent implements OnInit {
  @Input('content') content:String = "Link";
  @Input('icon') icon: string="";
  @Input('path') path: String[] = [];
  @Input('type') type: String = "";

  constructor() { }

  ngOnInit(): void {
  }
}
