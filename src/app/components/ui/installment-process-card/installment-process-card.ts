import { Component, Input } from '@angular/core';
import { describe } from 'vitest';

@Component({
  selector: 'app-installment-process-card',
  imports: [],
  templateUrl: './installment-process-card.html',
  styleUrl: './installment-process-card.css',
})
export class InstallmentProcessCard {
  @Input() desc: string ='';
  @Input() title: string ='';
}
