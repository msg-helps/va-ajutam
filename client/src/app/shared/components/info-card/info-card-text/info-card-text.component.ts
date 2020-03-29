import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-card-text',
  template: `
    <p class="card-text" [ngClass]="{ 'text-muted': muted }">
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./info-card-text.component.scss']
})
export class InfoCardTextComponent {
  @Input() muted = false;
}
