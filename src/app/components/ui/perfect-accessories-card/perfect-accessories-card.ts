import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfect-accessories-card',
  imports: [],
  templateUrl: './perfect-accessories-card.html',
  styleUrl: './perfect-accessories-card.css',
})
export class PerfectAccessoriesCard {
  @Input() name: string ="";
  @Input() img: string ="";

}
