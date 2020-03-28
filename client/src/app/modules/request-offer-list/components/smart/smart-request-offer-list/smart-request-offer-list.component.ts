import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-smart-request-offer-list',
  template: `
      <div class="container">
          <app-request-offer-list-header></app-request-offer-list-header>
          <app-request-offer-list-content></app-request-offer-list-content>
      </div>
  `,
  styleUrls: ['./smart-request-offer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartRequestOfferListComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
