import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-card',
  imports: [],
  templateUrl: './location-card.html',
  styleUrl: './location-card.css',
})
export class LocationCard {
  @Input() img: string = '';
  @Input() loaction: string = '';
}
