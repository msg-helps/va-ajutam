import {Component} from '@angular/core';

@Component({
  selector: 'app-pet-page',
  template: `
    <div class="container-fluid">
      <app-smart-pet-details></app-smart-pet-details>
    </div>
  `,
})
export class PetPageComponent {}
