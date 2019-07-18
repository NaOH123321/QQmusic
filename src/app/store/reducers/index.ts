import {
  Action,
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromSong from './song.reducer';
import * as fromLoading from './loading.reducer';
import { InjectionToken } from '@angular/core';

export interface State {
  song: fromSong.State;
  loading: fromLoading.LoadingState;
}

// AOT compatibility
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('ROOT_REDUCERS_TOKEN', {
  factory: () => ({
    song: fromSong.reducer,
    loading: fromLoading.reducer
  })
});

export const reducers: ActionReducerMap<State> = {
  song: fromSong.reducer,
  loading: fromLoading.reducer
};

/// selectors
export const getLoadingState = createFeatureSelector<fromLoading.LoadingState>(
  'loading'
);

export const getLoading = createSelector(
  getLoadingState,
  state => state.loading
);

export const getSongState = createFeatureSelector<fromSong.State>('song');

export const {
  selectIds: getSongIds,
  selectEntities: getSongEntities,
  selectAll: getSongAll,
  selectTotal: getSongTotal
} = fromSong.adapter.getSelectors(getSongState);

export const getSelectedSong = createSelector(
  getSongState,
  state => state.entities[state.selectedSongId]
);

export const getPagination = createSelector(
  getSongState,
  state => state.pagination
);
