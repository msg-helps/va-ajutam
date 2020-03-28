import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ListModel, RequestOfferStatus} from './request-offer-list.model';

@Injectable({
  providedIn: 'root'
})
export class RequestOfferListService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public constructor(private httpClient: HttpClient) {
  }

  getAllRequests(): Observable<ListModel[]> {
    return of([
      {
        id: 0,
        creationDate: new Date(Date.now()),
        title: '500 Masti Protectie',
        shortDescription: 'Nevoie Urgenta de Masti de Protectie',
        address: 'Strada Luni, nr 97',
        originator: {
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
        originator: {
          id: 1,
          name: 'Spitalul Boli Infectioase Cluj',
          phone: '0724262563'
        },
        status: RequestOfferStatus.IN_PROGRESS,
        participantsCount: 3
      }
    ]);
  }

}
