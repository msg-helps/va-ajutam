import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import BaseHelp, {HelpCategory} from '../../shared/model/help.model';

@Injectable({
  providedIn: 'root'
})
export class HelpOfferRequestService {
  constructor() {
  }

  async loadHelpOfferRequest(): Promise<BaseHelp> {
    const request: BaseHelp = {
      id: 'some-whatever-id',
      category: HelpCategory.SANITATION,
      description: '500 masti de protectie pentru personalul medical implicat in ingrijirea pacientilor.',
      contactPerson: 'Vasile Costache',
      contactPhone: '0743-554-234',
      createdAt: new Date(),
      messages: [],
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
      address: 'Str. Closca, nr 2, Medias'
    };

    return request;
  }

  async saveHelpOfferRequest(data: BaseHelp) {
    const request: BaseHelp = {
      id: data.id,
      category: data.category,
      description: data.description,
      contactPerson: data.contactPerson,
      contactPhone: data.contactPhone,
      createdAt: data.createdAt,
      messages: data.messages,
      title: data.title,
      user: data.user,
      address: data.address
    };
  }
}


