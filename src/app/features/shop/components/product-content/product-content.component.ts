import {Component, OnInit} from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";
import {ProductModel} from "../../../../shared/models/product.model";

@Component({
  selector: 'shop-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {

  // Base Class
  baseClass: String = "product-content";

  selectedImageIndex: number = 0;

  selectImage(index:number){
    this.selectedImageIndex= index;
  }

  // Product Demo
  productDemo: ProductModel = {
    id: "27498759",
    images: [
      'https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFVR0U5Y1pWbEwuX0FDX1NMMTUwMF8uanBn.jpg',
      'https://consumer.huawei.com/content/dam/huawei-cbg-site/me-africa/tn/mkt/plp/laptops/list-d14-2021.jpg',
      'https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFwLU0zc1BoaEwuX0FDX1NMMTUwMF8uanBn.jpg'
    ],
    name: 'Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel® Core™ i7 - 32GB Memory - 1TB SSD - Platinum',
    description: 'The most powerful Surface Laptop. Quad-core powered 11th Gen Intel Core H Series processors handle your most complex workloads. Design, animate, and render at top speed. Step up to the award-winning Ampere — NVIDIA\'s 2nd gen RTX architecture, enabling ray-traced graphics and cutting-edge AI features from NVIDIA GeForce RTX 3050 Ti. Boundary-pushing design with sleek 14.4“ (5) touchscreen makes seamless transitions from laptop to entertainment-ready stage to portable creative canvas. Pair with Surface Slim Pen 2 for the best digital pen experience yet, featuring the feeling of pen on paper(7). Magnetically attach, store, and charge under the front of the keyboard. Enjoy uniform, true-to-life color and contrast on the beautiful 14.4”(5) PixelSense Flow touch display. Experience smoother scrolling with a refresh rate up to 120Hz. You’re going to need Word, Excel, and PowerPoint. Don’t forget to add Microsoft 365',
    price: 1890.0,
    discount: 25,
    quantity: 235,
    outOfStock: true,
    category: {
      id: "2555",
      name: "Category_name"
    },
    owner: {
      id: "12",
      name: "Best Seller",
    },
  }

  constructor(public bem: Bem) {
  }

  ngOnInit(): void {
  }

}
