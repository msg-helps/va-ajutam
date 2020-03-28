import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ListModel, RequestOfferStatus} from './request-offer-list.model';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestOfferListService {
  public constructor() {
  }

  getAllRequests(): Observable<ListModel[]> {
    return of([
      {
        id: 0,
        creationDate: new Date(Date.now()),
        title: '500 Masti Protectie',
        shortDescription: 'Nevoie Urgenta de Masti de Protectie',
        address: 'Strada Luni, nr 97',
        requestedBy: {
          id: 0,
          name: 'Spitalul Munipicial Medias',
          phone: '0722256256'
        },
        status: RequestOfferStatus.OPEN,
        participantsCount: 0
      },
      {
        id: 1,
        creationDate: new Date(Date.now()),
        title: '50l Dezinfectant',
        shortDescription: 'Nevoie Dezinfectant',
        address: 'Strada Pamantului, nr 42',
        requestedBy: {
          id: 1,
          name: 'Spitalul Boli Infectioase Cluj',
          phone: '0724262563'
        },
        status: RequestOfferStatus.IN_PROGRESS,
        participantsCount: 3
      }
    ]).pipe(delay(500));
  }

  getAllOffers(): Observable<ListModel[]> {
    return of([
      {
        id: 0,
        creationDate: new Date(Date.now()),
        title: 'Ofer 50 Masti Protectie',
        shortDescription: 'Ofer masti protectie ',
        address: 'Strada Hermes, nr 17',
        requestedBy: {
          id: 3,
          name: 'Ion Vasile',
          phone: '0712256256'
        },
        status: RequestOfferStatus.OPEN,
        participantsCount: 1
      },
    ]).pipe(delay(500));
  }

}
