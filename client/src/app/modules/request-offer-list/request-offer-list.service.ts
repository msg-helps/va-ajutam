import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import HelpOffer from '../../shared/model/help-offer.model';
import HelpRequest from '../../shared/model/help-request.model';
import {HelpCategory, HelpStatus} from '../../shared/model/help.model';
import User from '../../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RequestOfferListService {
  public constructor() {
  }

  getAllRequests(): Observable<HelpRequest[]> {
    return of([
      {
        id: '0',
        createdAt: new Date(Date.now()),
        title: '500 Masti Protectie',
        description: 'Nevoie Urgenta de Masti de Protectie',
        address: 'Strada Luni, nr 97',
        user: {
          id: '0',
          firstName: 'Dr Bob',
          lastName: 'Vasile',
          organization: 'Spitalul Munipicial Medias',
          region: 'Medias',
          isAdmin: false,
          phone: '0722256256'
        } as User,
        requestedFor: 'Spitalul Munipicial Medias',
        volunteers: [
          {
            id: '0',
            firstName: 'Ion',
            lastName: 'Sapanta',
            phone: '073532425112',
            region: '',
            isAdmin: false,
            organization: 'OSUT'
          }
        ] as User[],
        contactPhone: '07324252135',
        contactPerson: 'Timoton Blog',
        category: HelpCategory.SANITATION,
        status: HelpStatus.OPEN
      } as HelpRequest
    ]).pipe(delay(500));
  }

  getAllOffers(): Observable<HelpOffer[]> {
    return of([
      {
        id: '0',
        createdAt: new Date(Date.now()),
        title: 'Ofer 400 Masti Protectie',
        description: 'Ofer Masti Protectie',
        address: 'Strada Pamant, nr 97',
        user: {
          id: '0',
          firstName: 'Nea Ion',
          lastName: 'Pamant',
          organization: 'Spitalul Munipicial Medias',
          region: 'Medias',
          isAdmin: false,
          phone: '071235252456'
        } as User,
        beneficiaries: ['Spitale', 'Guvern'] as Array<User | string>,
        quantity: 400,
        contactPhone: '07324252135',
        contactPerson: 'Timoton Blog',
      } as HelpOffer
    ]).pipe(delay(500));
  }

}
