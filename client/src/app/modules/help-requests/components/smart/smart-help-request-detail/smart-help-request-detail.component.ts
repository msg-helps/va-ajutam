import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import HelpRequest from '../../../../../shared/model/help-request.model';
import {LoadHelpRequest} from '../../../state/help-request.action';
import {selectHelpRequestState, StateWithHelpRequest} from '../../../state/help-request.reducer';

@Component({
  selector: 'app-smart-help-request-detail',
  template: `
    <app-help-request-detail
      *ngIf="(loading$ | async) === false"
      [helpRequest]="helpRequest$ | async"
      [mapsVisible]="mapsVisible$ | async"
      [mapsCoords]="coords$ | async"
      (volunteer)="onUserVolunteers()"
    >
    </app-help-request-detail>
  `,
  styleUrls: ['./smart-help-request-detail.component.scss']
})
export class SmartHelpRequestDetailComponent implements OnInit {
  helpRequest$: Observable<HelpRequest>;
  coords$: Observable<[number, number]>;
  mapsVisible$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(private store: Store<StateWithHelpRequest>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.helpRequest$ = this.store.select(selectHelpRequestState).pipe(select(state => state.data));
    this.loading$ = this.store.select(selectHelpRequestState).pipe(select(state => state.loading));
    this.coords$ = this.store.select(selectHelpRequestState).pipe(select(state => state.coords.data));
    this.mapsVisible$ = this.store.select(selectHelpRequestState).pipe(select(state => !state.coords.loading));

    this.route.params.subscribe(param => {
      this.store.dispatch(new LoadHelpRequest(param.id));
    });
  }

  onUserVolunteers() {
    alert('Woohooo');
  }
}
