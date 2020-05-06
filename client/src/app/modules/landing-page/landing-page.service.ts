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
        confirmed: 1832,
        cured: 321,
        quarantined: 44232,
        isolated: 213000,
        call112: 120000,
        telVerde: 300000,
        deaths: 130,
        tests: 25234,
        newUsers: 890,
        newRequests: 1500,
        nearbySearch: 20000,
        completedRequests: 201
      },
      {
        confirmed: 7777,
        cured: 1234,
        quarantined: 2432141,
        isolated: 235423,
        deaths: 230,
        tests: 55234,
        call112: 232,
        telVerde: 54654,
        newUsers: 1300,
        newRequests: 512,
        nearbySearch: 60000,
        completedRequests: 1520
      },
    ];

    const random = Math.floor(Math.random() * (stats.length + 1));
    if (random === stats.length) {
      throw new Error();
    }

    return of(stats[random]).pipe(delay(500));
  }
}
