import AppStats from '../landing-page.model';

export enum AppStatsActionTypes {
  LoadAppStats = '[AppStats] Load',
  LoadAppStatsSuccess = '[AppStats] Load Success',
  LoadAppStatsFailure = '[AppStats] Load Failure',
  ResetAppStats = '[AppStats] Reset'
}

export class LoadAppStats {
  readonly type = AppStatsActionTypes.LoadAppStats;
}

export class LoadAppStatsSuccess {
  readonly type = AppStatsActionTypes.LoadAppStatsSuccess;

  constructor(public payload: AppStats) {}
}

export class LoadAppStatsFailure {
  readonly type = AppStatsActionTypes.LoadAppStatsFailure;
}

export class ResetAppStats {
  readonly type = AppStatsActionTypes.ResetAppStats;
}

export type AppStatsActionUnion = LoadAppStats | ResetAppStats | LoadAppStatsSuccess | LoadAppStatsFailure;
