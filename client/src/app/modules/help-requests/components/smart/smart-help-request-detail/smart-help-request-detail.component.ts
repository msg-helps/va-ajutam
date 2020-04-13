import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import HelpRequest from '../../../../../shared/model/help-request.model';
import {LoadHelpRequest, MarkHelpRequestAsDone} from '../../../state/help-request.action';
import {selectHelpRequestState} from '../../../state/help-request.reducer';
import User from '../../../../../shared/model/user.model';
import State from '../../../../../shared/state/state';
import {selectUserState} from '../../../../../shared/user/state/user.reducer';

@Component({
  selector: 'app-smart-help-request-detail',
  template: `
      <app-help-request-detail
              *ngIf="(loading$ | async) === false"
              [helpRequest]="helpRequest$ | async"
              [mapsVisible]="mapsVisible$ | async"
              [mapsCoords]="coords$ | async"
      >
      </app-help-request-detail>
      <app-smart-help-request-detail-action-bar *ngIf="(helpRequest$ | async) && (currentUser$ | async)"
                                                [currentUser]="currentUser$ | async"
                                                [helpRequest]="helpRequest$ | async"
                                                (volunteer)="onUserVolunteers()"
                                                (removeParticipation)="onRemoveParticipation()"
                                                (markAsDone)="onMarkAsDone($event)"
      ></app-smart-help-request-detail-action-bar>
  `,
  styleUrls: ['./smart-help-request-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartHelpRequestDetailComponent implements OnInit {
  helpRequest$: Observable<HelpRequest>;
  coords$: Observable<[number, number]>;
  mapsVisible$: Observable<boolean>;
  loading$: Observable<boolean>;
  currentUser$: Observable<User>;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.helpRequest$ = this.store.select(selectHelpRequestState).pipe(select(state => state.data));
    this.loading$ = this.store.select(selectHelpRequestState).pipe(select(state => state.loading));
    this.coords$ = this.store.select(selectHelpRequestState).pipe(select(state => state.coords.data));
    this.mapsVisible$ = this.store.select(selectHelpRequestState).pipe(select(state => !state.coords.loading));
    this.currentUser$ = this.store.select(selectUserState).pipe(select(state => state.data));
    this.route.params.subscribe(param => {
      this.store.dispatch(new LoadHelpRequest(param.id));
    });
  }

  onUserVolunteers() {
    alert('Woohooo');
  }

  onRemoveParticipation() {
    alert('Wuluuwuluu');
  }

  onMarkAsDone(id: string) {
    this.store.dispatch(new MarkHelpRequestAsDone(id));
  }
}
