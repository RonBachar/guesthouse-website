import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      '../../assets/images/rooms/rain/rain-1.jpg',
      '../../assets/images/rooms/forest/forest-1.jpg',
    ];
  }
  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  getNext() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }
}
