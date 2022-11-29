import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './containers/category-page/category-page.component';
import {RouterModule, Routes} from "@angular/router";
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsLayoutComponent } from './components/products-layout/products-layout.component';

const routes : Routes=[
  {
    path: 'shop',
    children: [
      {path: 'category',component:CategoryPageComponent},
    ],
  }
];

@NgModule({
  declarations: [
    CategoryPageComponent,
    FiltersComponent,
    CardComponent,
    ProductsLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class ShopModule { }
