import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router: Router, private viewportScroller: ViewportScroller) {}

    scrollToSection(fragment: string) {
        this.router.navigate([], { fragment }).then(() => {
            this.viewportScroller.scrollToAnchor(fragment);
        });
    }
}
