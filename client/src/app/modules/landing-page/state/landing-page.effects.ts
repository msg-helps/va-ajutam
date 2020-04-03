import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import State from '../../../shared/state/state';
import {LandingPageService} from '../landing-page.service';
import {LoadAppStats, LoadAppStatsSuccess, AppStatsActionTypes, LoadAppStatsFailure} from './landing-page.action';

@Injectable()
export class AppStatsEffects {
  public constructor(private actions$: Actions, private store: Store<State>, private appStatsService: LandingPageService) {}

  @Effect()
  public loadStats$ = this.actions$.pipe(
    ofType<LoadAppStats>(AppStatsActionTypes.LoadAppStats),
    switchMap(() => this.appStatsService.loadRandomAppStats()),
    map(stats => new LoadAppStatsSuccess(stats)),
    catchError(() => [new LoadAppStatsFailure()])
  );
}
