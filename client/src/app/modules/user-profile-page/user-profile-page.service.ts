import { Injectable } from '@angular/core';
import UserProfile from './user-profile.model';

@Injectable()
export class UserService {

    constructor(){ }

    // Get User data - connect to svr
    getUser(): UserProfile {
        return { name: "Test Test", 
                 email: "test@test.com",
                 phone: "0757665889",
                 address: "Test address 123, Cluj Napoca" };
    }

}