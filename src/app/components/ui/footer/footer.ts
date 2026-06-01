import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: '../../../app.css',
})
export class Footer {
  @Input() iOne_log : string = '';
}
