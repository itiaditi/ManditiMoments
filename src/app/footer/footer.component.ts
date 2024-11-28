import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuItems = [
    { name: 'Sale', link: '/sale', isHighlighted: true },
    { name: 'Gift Store', link: '/gift-store' },
    { name: 'Home & Decor', link: '/home-decor' },
    { name: 'Bags & Travel', link: '/bags-travel' },
    { name: 'Watches', link: '/watches' },
    { name: 'Collections', link: '/collections' }
  ];

  searchQuery: string = '';

  onSearch(event: Event) {
    event.preventDefault();
    
    // Implement search logic here
  }
}
