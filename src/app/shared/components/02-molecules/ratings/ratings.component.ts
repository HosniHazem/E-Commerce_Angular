import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'c-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  @Input('ratings') ratings:number=0;
  staticStars= new Array(5);
  constructor() { }

  ngOnInit(): void {
  }


}
