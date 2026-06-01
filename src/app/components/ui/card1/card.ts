import { Component, Input } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once : true,
    })
  }
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() img_path: string = '';
}
