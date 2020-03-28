import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import Pet from '../../../pet.model';
import {LoadPet} from '../../../state/pet.action';
import {selectPetState, StateWithPet} from '../../../state/pet.reducer';

@Component({
  selector: 'app-smart-pet-details',
  template: `
    <app-pet-details
      [pet]="pet$ | async"
      (loadPet)="loadAnotherPet()"
    ></app-pet-details>

    <br>
    <span *ngIf="isLoading$ | async" class="alert alert-info mt-5">Loading barks...</span>
    <span *ngIf="hasError$ | async" class="alert alert-danger mt-5">Could not load woof :(</span>
  `,
  styleUrls: ['./smart-pet-details.component.scss']
})
export class SmartPetDetailsComponent implements OnInit {
  pet$: Observable<Pet>;
  hasError$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<StateWithPet>) { }

  ngOnInit(): void {
    this.pet$ = this.store.select(selectPetState).pipe(select(petState => petState.data));
    this.hasError$ = this.store.select(selectPetState).pipe(select(petState => petState.error));
    this.isLoading$ = this.store.select(selectPetState).pipe(select(petState => petState.loading));
  }

  loadAnotherPet() {
    this.store.dispatch(new LoadPet());
  }

}
