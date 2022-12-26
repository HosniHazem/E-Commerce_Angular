import {Component, OnInit} from '@angular/core';
import {InputGroup} from "../../../../shared/components/00-base/models/input.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'shop-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss']
})
export class WriteReviewComponent implements OnInit {

  rateValue: number=0;
  constructor() {
  }

  reviewInput = new InputGroup("", "textarea", "Write your review", "review", "review", "what do you think of this product...");
  reviewForm = new FormGroup({
    review: new FormControl(''),
  })
  ;

  ngOnInit(): void {
  }

  submitReview() {
  }

  rate(rateValue: any) {
    this.rateValue=rateValue;
  }
}
