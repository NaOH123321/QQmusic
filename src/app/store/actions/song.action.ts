import { createAction, props } from '@ngrx/store';
import { QueryParameter, DataWithPagination, Song } from '../../domain';

export const loadAll = createAction(
  '[Songs] Songs Load All',
  props<{ payload: QueryParameter }>()
);

export const loadAllSuccess = createAction(
  '[Songs] Songs Load All Success',
  props<{ payload: DataWithPagination }>()
);

export const select = createAction(
  '[Songs] Songs select',
  props<{ payload: string }>()
);

