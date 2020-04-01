import { Injectable } from '@angular/core';
import User from '../../shared/model/user.model';

@Injectable()
export class UserService {
  constructor(){ }

  // Get Mock User data
  getMockUser(): User {
    return { 
      id: null,
      firstName: "Firstname",
      lastName: "Lastname",
      isAdmin: false,
      phone: "0757665889",
      organization: "OrganizationX",
      region: "Cluj" 
    }
  }

    // Get User data - connection to svr
  getUser(): User {
    return null;
  };

}