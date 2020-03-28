import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-request-offer-list-page',
  template: `
      <app-smart-request-offer-list></app-smart-request-offer-list>
  `,
  styleUrls: ['./request-offer-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestOfferListPageComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
