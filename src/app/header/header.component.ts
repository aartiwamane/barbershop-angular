import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrolled = false;
  navActive = false;

  @HostListener('window:scroll',[])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleNav() {
    this.navActive = !this.navActive;
  }

  closeNav() {
    this.navActive = false;
  }
}
