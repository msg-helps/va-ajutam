import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import Message from '../../model/message.model';

@Component({
  selector: 'app-user-comments',
  template: `
    <app-user-comment *ngFor="let message of messages" [message]="message"></app-user-comment>
  `,
  styleUrls: ['./user-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCommentsComponent {
  @Input() messages: Message[];
}
