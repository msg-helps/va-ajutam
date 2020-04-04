import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import HelpRequest from '../../shared/model/help-request.model';
import {HelpCategory, HelpStatus} from '../../shared/model/help.model';

@Injectable({
  providedIn: 'root'
})
export class HelpRequestsService {
  constructor(private http: HttpClient) {
  }

  async loadHelpRequest(): Promise<HelpRequest> {
    const request: HelpRequest = {
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
    };

    return request;
  }

  async getCoordsForAddress(address: string): Promise<[number, number]> {
    const result = await this.http.get<GoogleGeocodeResult>(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address,
        key: environment.googleMapsKey
      }
    }).toPromise();

    return [ result.results[0].geometry.location.lat, result.results[0].geometry.location.lng ];
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
