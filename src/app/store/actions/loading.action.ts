import { createAction, props } from '@ngrx/store';
import { QueryParameter, DataWithPagination, Song } from '../../domain';

// export const LoadingShow = createAction(
//   '[Loading] Loading Show',
//   props<{ payload: null }>()
// );

// export const LoadingHide = createAction(
//   '[Loading] Loading Hide',
//   props<{ payload: null }>()
// );

export const LoadingShow = createAction('[Loading] Loading Show');
export const LoadingHide = createAction('[Loading] Loading Hide');
