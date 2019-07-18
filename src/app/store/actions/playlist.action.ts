import { createAction, props } from '@ngrx/store';
import { QueryParameter, DataWithPagination, Song } from '../../domain';

export const playShow = createAction(
  '[Playlist] Playlist Load All',
  props<{ payload: boolean }>()
);

export const playHide = createAction(
  '[Playlist] Playlist Load All Success',
  props<{ payload: boolean }>()
);

export const playAdd = createAction(
  '[Playlist] Playlist select',
  props<{ payload: Song }>()
);

