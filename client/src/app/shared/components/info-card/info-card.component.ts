import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-2">{{ title }}</h5>
        <ng-content></ng-content>

        <div class="mt-2"></div>
      </div>
    </div>
  `,
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() title: string;
}
