import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements AfterViewInit {
  testimonials = [
    { name: 'Iman Helal',
      image: 'dr.Iman.jpg',
      title: 'University Professor',
      comment: 'Gehad is a very hard working student. She is very welling to learn and she helps her friends when facing any issues. She is collaborative, active and polite. Working with her was a nice experience.',
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
