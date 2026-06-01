import { Component, Input } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-card-larg',
  imports: [],
  templateUrl: './card-larg.html',
  styleUrl: './card-larg.css',
})
export class CardLarg {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }
  @Input() img: string = '';
  @Input() title: string = '';
}
