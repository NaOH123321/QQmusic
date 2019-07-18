// import { createReducer, on } from '@ngrx/store';
// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// import { PlayList, Pagination } from '../../domain';
// import { loadAllSuccess, select } from '../actions';

// export interface State extends EntityState<PlayList> {
//   selectedSongId: string | null;
// }

// function selectSongId(a: PlayList): string {
//   return a.songId;
// }

// export const adapter: EntityAdapter<PlayList> = createEntityAdapter<Song>({
//   selectId: selectSongId,
//   sortComparer: false
// });

// export const initialState: State = adapter.getInitialState({
//   selectedSongId: null,
//   pagination: null
// });

// export const reducer = createReducer(
//   initialState,
//   on(
//     loadAllSuccess,
//     (state, { payload }): State => ({
//       ...adapter.addAll(payload.array, state),
//       pagination: payload.pagination,
//       selectedSongId: null
//     })
//   ),
//   on(
//     select,
//     (state, { payload }): State => ({ ...state, selectedSongId: payload })
//   )
// );

// export const getSelectedId = (state: State) => state.selectedSongId;
