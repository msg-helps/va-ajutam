import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-loading-spinner-component',
  template: `
      <div class="container full-page">
          <div class="big-object-container">
              <div class="spinner-border text-success big-object" role="status">
                  <span class="sr-only">Loading...</span>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['./loading-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSpinnerComponent {

}
