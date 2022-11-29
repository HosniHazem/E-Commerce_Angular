import {Component, Input, OnInit} from '@angular/core';
import {Bem} from "../../../../shared/functions/bem";

interface CardModel {
  id: number;
  image: String;
  title: String;
  description: String;
  price: number;
  outOfStock: boolean;
  promo: number;
  brand: String;
  rating: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardDemo: CardModel = {
    id: 27498759,
    image: 'https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFVR0U5Y1pWbEwuX0FDX1NMMTUwMF8uanBn.jpg',
    title: 'Microsoft Surface Laptop Studio - 14.4" Touchscreen - Intel® Core™ i7 - 32GB Memory - 1TB SSD - Platinum',
    description: 'The most powerful Surface Laptop. Quad-core powered 11th Gen Intel Core H Series processors handle your most complex workloads. Design, animate, and render at top speed. Step up to the award-winning Ampere — NVIDIA\'s 2nd gen RTX architecture, enabling ray-traced graphics and cutting-edge AI features from NVIDIA GeForce RTX 3050 Ti. Boundary-pushing design with sleek 14.4“ (5) touchscreen makes seamless transitions from laptop to entertainment-ready stage to portable creative canvas. Pair with Surface Slim Pen 2 for the best digital pen experience yet, featuring the feeling of pen on paper(7). Magnetically attach, store, and charge under the front of the keyboard. Enjoy uniform, true-to-life color and contrast on the beautiful 14.4”(5) PixelSense Flow touch display. Experience smoother scrolling with a refresh rate up to 120Hz. You’re going to need Word, Excel, and PowerPoint. Don’t forget to add Microsoft 365',
    price: 1890.0,
    outOfStock: true,
    promo:25,
    brand:'Microsoft',
    rating: 4,
  }

  @Input('card') card: CardModel = this.cardDemo;

  // Base Class
  baseClass = 'card';

  // Card Demo

  constructor(public bem: Bem) {
  }

  ngOnInit(): void {
  }

}
