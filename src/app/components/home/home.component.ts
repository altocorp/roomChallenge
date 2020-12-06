import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
//<fa-icon [icon]="faCoffee"></fa-icon>

import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;
  @ViewChild('mycarousel2', {static : true}) carousel2: NgbCarousel;

  image=['../../../assets/img/desktop-image-hero-1.jpg', '../../../assets/img/desktop-image-hero-2.jpg', '../../../assets/img/desktop-image-hero-3.jpg']

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 0;
   }

  ngOnInit(): void {
  }

  move1(){
    this.carousel.next();
    this.carousel2.next();
  }

  move2(){
    this.carousel.prev();
    this.carousel2.prev();
  }

}
