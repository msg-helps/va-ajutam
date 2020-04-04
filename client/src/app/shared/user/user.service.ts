import {Injectable} from '@angular/core';
import User from '../model/user.model';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor() {
  }

  // Get User data - connection to svr
  getUser(): Observable<User> {
    const users: User[] = [
      {
        id: 'some-uuid-3',
        firstName: 'Firstname',
        lastName: 'Lastname',
        isAdmin: false,
        phone: '0757665889',
        organization: 'OrganizationX',
        region: 'Cluj'
      }, {
        id: 'some-uuid-2',
        firstName: 'Firstname1',
        lastName: 'Lastname1',
        isAdmin: false,
        phone: '0757665889',
        organization: 'OrganizationX',
        region: 'Cluj'
      }, {
        id: 'some-uuid-1',
        firstName: 'Firstname2',
        lastName: 'Lastname2',
        isAdmin: false,
        phone: '0757665889',
        organization: 'OrganizationX',
        region: 'Cluj'
      }];


    const random = 0;

    return of(users[random]).pipe(delay(200));
  }

}
