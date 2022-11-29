import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'c-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnChanges {

  // Grid Values
  @Input('gridCols') gridCols?: {
    default: number;
    lg?: number;
    md?: number;
    sm?: number;
  } = {
    default: 1,
  };
  
  @Input('gridGap') gridGap?: {
    default: number;
    lg?: number;
    md?: number;
    sm?: number;
  } = {
    default: 0,
  };

  // Final Layout
  finalLayout = 'grid';

  constructor() {}

  ngOnInit(): void {
   this.gridLayoutRender();
  }
  ngOnChanges(){
    this.gridColsRender()
  }

  // Grid Cols Render
  gridColsRender() {
    let gridColsFinal = '';
    // Grid Cols
    if (this.gridCols) {
      if (this.gridCols.default) {
        gridColsFinal += ` grid-cols-${this.gridCols.default}`;
      }
      if (this.gridCols.lg) {
        gridColsFinal += ` lg:grid-cols-${this.gridCols.lg}`;
      }
      if (this.gridCols.md) {
        gridColsFinal += ` md:grid-cols-${this.gridCols.md}`;
      }
      if (this.gridCols.sm) {
        gridColsFinal += ` sm:grid-cols-${this.gridCols.sm}`;
      }
    }
    return gridColsFinal;
  }

  // Grid Gap Render
  gridGapRender() {
    let gridGapFinal = '';

    // Grid Gap
    if (this.gridGap) {
      if (this.gridGap.default) {
        gridGapFinal = gridGapFinal + ` gap-${this.gridGap.default}`;
      }
      if (this.gridGap.lg) {
        gridGapFinal += ` lg:gap-${this.gridGap.lg}`;
      }
      if (this.gridGap.md) {
        gridGapFinal += ` md:gap-${this.gridGap.md}`;
      }
      if (this.gridGap.sm) {
        gridGapFinal += ` sm:gap-${this.gridGap.sm}`;
      }
    }
    return gridGapFinal;
  }


  gridLayoutRender() {
    //document.documentElement.style.setProperty('')
    this.finalLayout= `grid ${this.gridColsRender()} ${this.gridGapRender()}`;
  }
}
