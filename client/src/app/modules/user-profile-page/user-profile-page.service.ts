import { Injectable } from '@angular/core';
import User from '../../shared/model/user.model';
import { Observable, of, observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {
  
  constructor(){ }

  // Get User data - connection to svr
  getUser(): Observable<User> {
    const users: User[] = [
      {
        id: null,
        firstName: "NonAdmin",
        lastName: "NonBanned",
        isAdmin: false,
        isBanned: false,
        phone: "0757665889",
        organization: "OrganizationX",
        region: "Cluj" 
      },{ 
        id: null,
        firstName: "NonAdmin",
        lastName: "Banned",
        isAdmin: false,
        isBanned: true,
        phone: "0757665889",
        organization: "OrganizationX",
        region: "Cluj" 
      },{ 
        id: null,
        firstName: "Admin",
        lastName: "Banned",
        isAdmin: true,
        isBanned: true,
        phone: "0757665889",
        organization: "OrganizationX",
        region: "Cluj" 
      },{ 
        id: null,
        firstName: "Admin",
        lastName: "NonBanned",
        isAdmin: true,
        isBanned: false,
        phone: "0757665889",
        organization: "OrganizationX",
        region: "Cluj" 
      }];

      
    const random = Math.floor(Math.random() * (users.length + 1));
    if (random === users.length) {
      throw new Error();
    }

    return of(users[random]).pipe(delay(200));
  };

}