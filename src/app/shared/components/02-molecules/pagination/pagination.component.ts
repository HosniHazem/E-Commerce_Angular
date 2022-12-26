import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'c-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('meta') meta: any;
  @Output('getPage') getPage = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  countPage() {
    return new Array(this.meta.totalPages);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  getPageFunc(number: number) {
    console.log(number)
    this.getPage.emit(number)
  }
}
