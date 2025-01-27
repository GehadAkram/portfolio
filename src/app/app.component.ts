import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

    scrollToSection(fragment: string) {
        this.router.navigate([], { fragment }).then(() => {
            this.viewportScroller.scrollToAnchor(fragment);
        });
    }
}
