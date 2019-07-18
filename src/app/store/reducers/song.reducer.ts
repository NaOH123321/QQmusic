import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Song, Pagination } from '../../domain';
import { loadAllSuccess, addAllSuccess, selectSong } from '../actions';

export interface State extends EntityState<Song> {
  selectedSongId: string | null;
  pagination: Pagination;
}

function selectSongId(a: Song): string {
  return a.songId;
}

export const adapter: EntityAdapter<Song> = createEntityAdapter<Song>({
  selectId: selectSongId,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selectedSongId: null,
  pagination: null
});

export const reducer = createReducer(
  initialState,
  on(
    loadAllSuccess,
    (state, { payload }): State => ({
      ...adapter.addAll(payload.array, state),
      pagination: payload.pagination,
      selectedSongId: null
    })
  ),
  on(
    addAllSuccess,
    (state, { payload }): State => ({
      ...adapter.addMany(payload.array, state),
      pagination: payload.pagination,
      selectedSongId: null
    })
  ),
  on(
    selectSong,
    (state, { payload }): State => ({ ...state, selectedSongId: payload })
  )
);

export const getSelectedId = (state: State) => state.selectedSongId;
