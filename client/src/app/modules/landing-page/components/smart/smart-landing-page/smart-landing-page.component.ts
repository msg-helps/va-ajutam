import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import AppStats from '../../../landing-page.model';
import {LoadAppStats} from '../../../state/landing-page.action';
import {selectAppStatsState, StateWithAppStats} from '../../../state/landing-page.reducer';

@Component({
  selector: 'app-smart-landing-page',
  template: `
    <app-landing-page-details
      [appStats]="appStats$ | async"
      (loadStats)="loadAnotherAppStats()"
    ></app-landing-page-details>

    <br>
    <span *ngIf="isLoading$ | async" class="alert alert-info mt-5">Loading stats...</span>
    <span *ngIf="hasError$ | async" class="alert alert-danger mt-5">Could not load stats</span>
  `,
  styleUrls: ['./smart-landing-page.component.scss']
})
export class SmartLandingPageComponent implements OnInit {
  appStats$: Observable<AppStats>;
  hasError$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<StateWithAppStats>) { }

  ngOnInit(): void {
    this.appStats$ = this.store.select(selectAppStatsState).pipe(select(appStatsState => appStatsState.data));
    this.hasError$ = this.store.select(selectAppStatsState).pipe(select(appStatsState => appStatsState.error));
    this.isLoading$ = this.store.select(selectAppStatsState).pipe(select(appStatsState => appStatsState.loading));
  }

  loadAnotherAppStats() {
    this.store.dispatch(new LoadAppStats());
  }

}
