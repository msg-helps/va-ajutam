import { Injectable } from '@angular/core';
import User from '../../shared/model/user.model';
import { Observable, of, observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(){ }

  // Get Mock User data
  getMockUser(): Observable<User> {

    const users: User[] = [
        { 
            id: null,
            firstName: "Firstname",
            lastName: "Lastname",
            isAdmin: false,
            phone: "0757665889",
            organization: "OrganizationX",
            region: "Cluj" 
          }];
  
      return of(users[0]).pipe(delay(500));
  }

    // Get User data - connection to svr
  getUser(): User {
    return null;
  };

}