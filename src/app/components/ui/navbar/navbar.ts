import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  templateUrl: `./navbar.html`,
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() imgLogo: string = '';
  @Input() appleLogo: string = '';
}
