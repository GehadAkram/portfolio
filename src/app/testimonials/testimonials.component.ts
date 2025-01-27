import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements AfterViewInit {
  testimonials = [
    { name: 'Anna Deynah',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
      title: 'UX Designer',
      comment: 'I am very happy with the service you provided.',
      rating: 5
    },
  ];

  ngAfterViewInit() {
    const scrollLeft = document.getElementById('scroll-left');
    const scrollRight = document.getElementById('scroll-right');
    const testimonialsContainer = document.getElementById('testimonials-container');

    if (scrollLeft && testimonialsContainer) {
      scrollLeft.onclick = function () {
        testimonialsContainer.scrollBy({ left: -290, behavior: 'smooth' });
      };
    }

    if (scrollRight && testimonialsContainer) {
      scrollRight.onclick = function () {
        testimonialsContainer.scrollBy({ left: 290, behavior: 'smooth' });
      };
    }
  }
}
