import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services: Service[] = [
    {
      icon: 'fas fa-cut',
      title: 'Haircut',
      description: 'Precision haircut tailored to your style, includes consultation, wash, and styling.',
      price: '$25 - $35'
    },
    {
      icon: 'fas fa-scissors',
      title: 'Haircut & Beard Trim',
      description: 'Complete grooming package with haircut and beard shaping for a polished look.',
      price: '$35 - $45'
    },
    {
      icon: 'fas fa-fire',
      title: 'Hot Towel Shave',
      description: 'Classic straight razor shave with hot towel treatment for ultimate relaxation.',
      price: '$30'
    },
    {
      icon: 'fas fa-child',
      title: 'Kid\'s Haircut',
      description: 'Gentle haircuts for children under 12, with special attention to comfort.',
      price: '$20'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Hair Coloring',
      description: 'Professional color services including full color, highlights, and gray coverage.',
      price: '$50+'
    },
    {
      icon: 'fas fa-magic',
      title: 'Styling & Treatments',
      description: 'Specialized styling for events or treatments for hair health and shine.',
      price: '$25+'
    }
  ]
}
