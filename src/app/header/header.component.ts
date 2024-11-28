// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {

// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:[RouterOutlet,RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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