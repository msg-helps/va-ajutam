import {Component, EventEmitter, Input, Output} from '@angular/core';
import Pet from '../../../pet.model';

@Component({
  selector: 'app-pet-details',
  template: `
    <div>
      <p>Here's your dog:</p>

      <p>
        Name: {{ pet.name }} <br />
        Breed: {{ pet.breed }}
      </p>
      <p [innerHTML]="pet">

      </p>

      <button class="btn btn-primary" (click)="loadPet.emit()">Load Another</button>
    </div>
  `,
  styleUrls: ['./pet-details.component.scss']
})
export class PetDetailsComponent {
  @Input() pet: Pet;
  @Output() loadPet = new EventEmitter<void>();
}
