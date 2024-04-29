import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cols: number = 3;

  images = [
    { url: '../../../../assets/images/gallery/gallery-01.jpg' },
    { url: '../../../../assets/images/gallery/gallery-02.jpg' },
    { url: '../../../../assets/images/gallery/gallery-03.jpg' },
    { url: '../../../../assets/images/gallery/gallery-04.jpg' },
    { url: '../../../../assets/images/gallery/gallery-05.jpg' },
    { url: '../../../../assets/images/gallery/gallery-06.jpg' },
    { url: '../../../../assets/images/gallery/gallery-07.jpg' },
    { url: '../../../../assets/images/gallery/gallery-08.jpg' },
    { url: '../../../../assets/images/gallery/gallery-09.jpg' },
    { url: '../../../../assets/images/gallery/gallery-10.jpg' },
    { url: '../../../../assets/images/gallery/gallery-11.jpg' },
    { url: '../../../../assets/images/gallery/gallery-12.jpg' },
    { url: '../../../../assets/images/gallery/gallery-13.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-14.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-15.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-16.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-17.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-18.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-19.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-20.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-21.jpg' },
    // { url: '../../../../assets/images/gallery/gallery-22.jpg' }
  ];
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.cols = 2;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.cols = 3;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.cols = 4;
      } else if (result.breakpoints[Breakpoints.Large] || result.breakpoints[Breakpoints.XLarge]) {
        this.cols = 5;
      }
    });
  }

}
