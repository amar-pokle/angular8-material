import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
  //public categoryTable;
  public category_id :any;
  public category_name :any;
  headers: any;
  myData : any;
  authToken: any;

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.3,
        nav: true
      },
      768: {
        items: 2.3,
        nav: true
      },
      991: {
        items: 3.3,
        nav: true,
        loop: false
      },
      1199: {
        items: 3.3,
        nav: true,
        loop: false
      }
    }
  }

  images = [
    {
      text: "Sample Text 1",
      image: "assets/imgs/photo.jpeg"
    },
    {
      text: "Sample Text 2",
      image: "assets/imgs/photo.jpeg"
    },
    {
      text: "Sample Text 3",
      image: "assets/imgs/photo.jpeg"
    },
    {
      text: "Sample Text 4",
      image: "assets/imgs/photo.jpeg"
    },
  ]


  constructor() { }



  ngOnInit() {
  }

}
