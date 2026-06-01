import { Component, Input } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-featured-card',
  imports: [],
  templateUrl: './featured-card.html',
  styleUrl: './featured-card.css',
})
export class FeaturedCard {
  ngOnInit() {
  AOS.init({
    duration: 1000,
    once: true,
  })
  }
  @Input() name: string = '';
  @Input() image: string = '';
}
