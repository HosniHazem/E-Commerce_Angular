import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './containers/category-page/category-page.component';
import {RouterModule, Routes} from "@angular/router";
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsLayoutComponent } from './components/products-layout/products-layout.component';
import { ProductPageComponent } from './containers/product-page/product-page.component';
import { ShopPageComponent } from './containers/shop-page/shop-page.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { CreateShopPageComponent } from './containers/create-shop-page/create-shop-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { WriteReviewComponent } from './components/write-review/write-review.component';
import { SellerDashboardComponent } from './containers/seller-dashboard/seller-dashboard.component';
import { DashboardNavbarComponent } from './components/seller/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './components/seller/dashboard-sidebar/dashboard-sidebar.component';
import { MyProductsComponent } from './components/seller/my-products/my-products.component';
import { MyCouponsComponent } from './components/seller/my-coupons/my-coupons.component';
import { EditProductComponent } from './components/seller/edit-product/edit-product.component';
import { EditCouponComponent } from './components/seller/edit-coupon/edit-coupon.component';
import { CreateProductComponent } from './components/seller/create-product/create-product.component';
import { CreateCouponComponent } from './components/seller/create-coupon/create-coupon.component';

const routes : Routes=[
  {
    path: 'shop',
    children: [
      {path: 'category/:id',component:CategoryPageComponent},
      {path: 'product/:id',component:ProductPageComponent},
      {path: 'shop/:id', component:ShopPageComponent},
      {path: 'create-shop', component: CreateShopPageComponent},
      {
        path: 'dashboard',
        component: SellerDashboardComponent,
        children:[
          {
            path:'my-products',
            component: MyProductsComponent,
          },
          {
            path: 'create-product',
            component: CreateProductComponent,
          },
          {
            path: 'edit-product/:id',
            component: EditProductComponent,
          },
          {
            path: 'my-coupons',
            component: MyCouponsComponent,
          },
          {
            path: 'create-coupon',
            component: CreateCouponComponent,
          },
          {
            path: 'edit-coupon',
            component: EditCouponComponent,
          },
        ]
      },
    ],
  }
];

@NgModule({
  declarations: [
    CategoryPageComponent,
    FiltersComponent,
    CardComponent,
    ProductsLayoutComponent,
    ProductPageComponent,
    ShopPageComponent,
    ProductContentComponent,
    RelatedProductsComponent,
    CreateShopPageComponent,
    ProductReviewsComponent,
    WriteReviewComponent,
    SellerDashboardComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    MyProductsComponent,
    MyCouponsComponent,
    EditProductComponent,
    EditCouponComponent,
    CreateProductComponent,
    CreateCouponComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ShopModule { }
