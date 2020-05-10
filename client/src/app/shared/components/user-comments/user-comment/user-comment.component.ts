import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import Message from '../../../model/message.model';

@Component({
  selector: 'app-user-comment',
  template: `
    <div class="mb-2">
      <app-info-card [title]="message.author.firstName + ' ' + message.author.lastName" [titleRight]="message.createdAt | date:'HH:mm dd.MM.y'">
        <app-info-card-text muted="muted">
          {{ message.content }}
        </app-info-card-text>
      </app-info-card>
    </div>
  `,
  styleUrls: ['./user-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCommentComponent {
  @Input() message: Message;
}
