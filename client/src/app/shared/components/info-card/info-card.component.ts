import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-card',
  template: `
    <div class="card">
      <div class="card-body">
        <div class="row mb-2">
          <div class="col-6">
            <h5 class="card-title">{{ title }}</h5>
          </div>
          <div class="col-6 text-right">
            <h5 class="card-title text-muted">{{ titleRight }}</h5>
        </div>
        </div>
        <ng-content></ng-content>

        <div class="mt-2"></div>
      </div>
    </div>
  `,
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() title: string;
  @Input() titleRight?: string;
}
