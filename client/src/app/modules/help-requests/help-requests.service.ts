import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import HelpOffer from '../../shared/model/help-offer.model';
import HelpRequest from '../../shared/model/help-request.model';
import {HelpCategory, HelpStatus} from '../../shared/model/help.model';
import Message from '../../shared/model/message.model';
import User from '../../shared/model/user.model';
import {MessageInputDto} from './help-requests.model';

@Injectable({
  providedIn: 'root'
})
export class HelpRequestsService {
  private requests: HelpRequest[] = [
    {
      id: 'some-whatever-id',
      category: HelpCategory.SANITATION,
      description: '500 masti de protectie pentru personalul medical implicat in ingrijirea pacientilor.',
      requestedFor: 'Spitalul Municipal Medias',
      contactPerson: 'Vasile Costache',
      contactPhone: '0743-554-234',
      createdAt: new Date(),
      messages: [],
      status: HelpStatus.OPEN,
      title: '500 masti protectie',
      user: {
        firstName: 'Vasile',
        lastName: 'Costache',
        phone: '0743-554-234',
        id: 'some-uuid-3',
        isAdmin: false,
        organization: null,
        region: 'Cluj-Napoca'
      },
      address: 'Str. Closca, nr 2, Medias',
      volunteers: [
        {
          firstName: 'Serban',
          lastName: 'Petrescu',
          phone: null,
          id: 'some-uuid-1',
          organization: null,
          region: 'Cluj-Napoca',
          isAdmin: false
        },
        {
          firstName: 'Madalin',
          lastName: 'Madalinescu',
          phone: null,
          id: 'some-uuid-2',
          organization: null,
          region: 'Cluj-Napoca',
          isAdmin: false
        }
      ]
    } as HelpRequest,
    {
      id: 'some-whatever-id-1',
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
          id: 'some-whatever-id-2',
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
  ];

  constructor(private http: HttpClient) {}

  getAllRequests(): Observable<HelpRequest[]> {
    return of(this.requests).pipe(delay(500));
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

  markHelpRequestAsDone(id: string): Observable<void> {
    const ref: HelpRequest = this.requests.find(x => x.id === id);
    ref.status = HelpStatus.CLOSED;
    return of(null).pipe(delay(500));
  }

  async loadHelpRequest(helpRequestId: string): Promise<HelpRequest> {
    return this.requests.find(request => request.id === helpRequestId);
  }

  async getCoordsForAddress(address: string): Promise<[number, number]> {
    const result = await this.http.get<GoogleGeocodeResult>(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address,
        key: environment.googleMapsKey
      }
    }).toPromise();

    return [result.results[0].geometry.location.lat, result.results[0].geometry.location.lng];
  }

  async loadMessages(helpRequestId: string): Promise<Message[]> {
    await new Promise(r => setTimeout(r, 500));

    const messages: Message[] = [{
      id: '1',
      createdAt: new Date(),
      author: {
        firstName: 'Paul',
        lastName: 'Cosma'
      } as User,
      content: 'Hello world!'
    }, {
      id: '2',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
      author: {
        firstName: 'Antonio',
        lastName: 'Marasescu-Duran'
      } as User,
      content: 'Aenean vel feugiat nunc, in feugiat augue. In dignissim ante et felis congue pellentesque. Praesent fringilla mauris sodales libero hendrerit molestie. Nulla risus odio, accumsan in nisl et, faucibus placerat leo. Nam quis neque tincidunt, imperdiet nulla nec, euismod elit. Aliquam pharetra facilisis porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    }];

    return messages;
  }

  async postMessage(helpRequestId: string, message: MessageInputDto): Promise<Message> {
    await new Promise(r => setTimeout(r, 500));

    return {
      content: message.content,
      author: {
        firstName: 'Paul',
        lastName: 'Cosma'
      } as User,
      createdAt: new Date(),
      id: Date.now() + ''
    };
  }

  async loadNewMessages(helpRequestId: string, sinceDate: Date): Promise<Message[]> {
    await new Promise(r => setTimeout(r, 500));
    const shouldReturnMessage = Math.random() > 0.8;
    if (!shouldReturnMessage) {
      return [];
    }

    return [{
      createdAt: new Date(),
      author: {
       firstName: 'Gigel',
       lastName: 'Mirel'
      } as User,
      content: 'Lorem ipsum felis congue pellentesque.',
      id: Date.now() + ''
    }];
  }
}

interface GoogleGeocodeResult {
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      type: string[];
    }[];
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      },
      location_type: string;
    }
  }[];
}
