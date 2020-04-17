import { Injectable } from '@angular/core';
import User from '../../shared/model/user.model';
import { Observable, of, observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {
  
  constructor(){ }

  users: User[] = [
    {
      id: 'some-uuid-1',
      firstName: "NonAdmin",
      lastName: "NonBanned",
      isAdmin: false,
      isBanned: false,
      phone: "0757665889",
      organization: "OrganizationX",
      region: "Cluj" 
    } as User,{ 
      id: 'some-uuid-2',
      firstName: "NonAdmin",
      lastName: "Banned",
      isAdmin: false,
      isBanned: true,
      phone: "0757665889",
      organization: "OrganizationX",
      region: "Cluj" 
    } as User,{ 
      id: 'some-uuid-3',
      firstName: "Admin",
      lastName: "Banned",
      isAdmin: true,
      isBanned: true,
      phone: "0757665889",
      organization: "OrganizationX",
      region: "Cluj" 
    } as User,{ 
      id: 'some-uuid-4',
      firstName: "Admin",
      lastName: "NonBanned",
      isAdmin: true,
      isBanned: false,
      phone: "0757665889",
      organization: "OrganizationX",
      region: "Cluj" 
    } as User];


  // Get User data - connection to svr
  getUser(): Observable<User> {
    const random = Math.floor(Math.random() * (this.users.length + 1));
    if (random === this.users.length) {
      throw new Error();
    }
    return of(Object.assign({}, this.users[random])).pipe(delay(200));
  };

  markUserAsBanned(id:string): Observable<User>{  
    let user: User = this.users.filter(x => x.id === id)[0];
    console.log(user.id);
    user.isBanned = true;
    return of(Object.assign({}, user)).pipe(delay(500));
  }

  markUserAsNotBanned(id:string): Observable<User>{  
    let user: User = this.users.filter(x => x.id === id)[0];
    console.log(user.id);
    user.isBanned = false;
    return of(Object.assign({}, user)).pipe(delay(500));
  }

}