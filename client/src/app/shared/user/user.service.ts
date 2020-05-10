import {DynamoDB} from 'aws-sdk';
import {Injectable} from '@angular/core';
import User from '../../shared/model/user.model';
import {Observable, from} from 'rxjs';
import {AuthService} from '../auth.service';
import {flatMap, map} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private authService: AuthService) {
  }

  getUser(): Observable<User> {
    return this.authService.getState().pipe(
      flatMap(({aws, credentials}) => this.readUserFromServer(new aws.DynamoDB.DocumentClient(), credentials.user.id)
        .then(user => user || credentials.user))
    );
  }

  private async readUserFromServer(dc: DynamoDB.DocumentClient, id: string): Promise<User> {
    const response = await dc.get({
      TableName: 'va-ajutam-dev-users',
      Key: {
        id
      }
    }).promise();
    return response.Item as User;
  }

}
