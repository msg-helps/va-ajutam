import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import Pet from './pet.model';

@Injectable()
export class PetService {

  // Mocks an API call
  loadRandomPet(): Observable<Pet> {
    const pets: Pet[] = [
      { name: 'Puffy', breed: 'Bull Dog' },
      { name: 'Barky', breed: 'Barking Breed' },
      { name: 'Tiny', breed: 'I do\'t know dog breeds' },
    ];


    const random = Math.floor(Math.random() * (pets.length + 1));
    if (random === pets.length) {
      throw new Error();
    }

    return of(pets[random]).pipe(delay(500));
  }
}
