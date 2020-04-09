import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import Message from '../../../../../shared/model/message.model';
import {
  LoadHelpRequestMessages,
  PostHelpRequestMessage,
  ShortPollHelpRequestMessages
} from '../../../state/help-request.action';
import {selectHelpRequestState, StateWithHelpRequest} from '../../../state/help-request.reducer';

@Component({
  selector: 'app-smart-help-request-comments',
  template: `
    <app-comment-text-field
      (postMessage)="onPostMessage($event)"
      [form]="form"
      [controlName]="'messageContent'"
    ></app-comment-text-field>
    <div class="mt-3">
      <app-user-comments [messages]="messages$ | async"></app-user-comments>
    </div>
  `
})
export class SmartHelpRequestCommentsComponent implements OnInit {
  messages$: Observable<Message[]>;

  form = new FormGroup({
    messageContent: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private store: Store<StateWithHelpRequest>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.messages$ = this.store.select(selectHelpRequestState).pipe(select(state => state.messages));

    this.route.params.subscribe(({ id }: { id: string }) => {
      this.store.dispatch(new LoadHelpRequestMessages(id));
      this.store.dispatch(new ShortPollHelpRequestMessages(id));
    });
  }

  onPostMessage(content: string): void {
    this.route.params.pipe(take(1)).subscribe(({ id }: { id: string }) => {
      this.store.dispatch(new PostHelpRequestMessage({ id, message: { content } }));
    });

    this.form.reset({
      messageContent: ''
    });
  }

}
