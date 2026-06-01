import { Component, Input } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-card-larg-revers',
  imports: [],
  templateUrl: './card-larg-revers.html',
  styleUrl: './card-larg-revers.css',
})
export class CardLargRevers {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  @Input() img: string = '';
  @Input() title: string = '';
}
