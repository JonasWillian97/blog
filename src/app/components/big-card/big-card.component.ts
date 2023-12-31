import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent {
  @Input()
  title: string = "";
  @Input()
  photo: string = "";
  @Input()
  description: string = "";
}
