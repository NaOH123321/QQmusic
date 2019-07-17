import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromSong from './song.reducer';
import { InjectionToken } from '@angular/core';

export interface State {
  song: fromSong.State;
  // more state here
}

// AOT compatibility
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('ROOT_REDUCERS_TOKEN', {
  factory: () => ({
    song: fromSong.reducer
  })
});

export const reducers: ActionReducerMap<State> = {
  song: fromSong.reducer
};

/// selectors
export const getSongState = createFeatureSelector<fromSong.State>('song');

export const getSelectedSong = createSelector(
  getSongState,
  state => state.entities[state.selectedSongId]
);
