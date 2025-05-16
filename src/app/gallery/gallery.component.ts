import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
 images: GalleryImage[] = [
    {
      url: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Barber cutting hair'
    },
    {
      url: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Barber shop interior'
    },
    {
      url: 'https://images.pexels.com/photos/2076932/pexels-photo-2076932.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beard trimming'
    },
    {
      url: 'https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Classic barbershop setup'
    },
    {
      url: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair styling'
    },
    {
      url: 'https://images.pexels.com/photos/2526307/pexels-photo-2526307.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Barber tools'
    }
  ]
}
