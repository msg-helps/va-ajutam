import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import AppStats from './landing-page.model';

@Injectable()
export class LandingPageService {

  // Mocks an API call
  loadRandomAppStats(): Observable<AppStats> {
    const stats: AppStats[] = [
      {
          confirmati: '1832',
          vindecati: '321',
          carantina: '44232',
          izolare: '213000',
          call112: '120000',
          telverde: '300000'
        },
      {
          confirmati: '7777',
          vindecati: '123',
          carantina: '2432141',
          izolare: '235423',
          call112: '232',
          telverde: '54654'
        },
    ];


    const random = Math.floor(Math.random() * (stats.length + 1));
    if (random === stats.length) {
      throw new Error();
    }

    return of(stats[random]).pipe(delay(500));
  }
}
