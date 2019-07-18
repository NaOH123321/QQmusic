import { createReducer, on } from '@ngrx/store';
import { LoadingShow, LoadingHide } from '../actions';

export interface LoadingState {
  loading: boolean;
}

const initialState: LoadingState = {
  loading: false
};

// export const reducer = createReducer(
//   initialState,
//   //   on(LoadingShow, (state, { payload }): boolean => true),
//   //   on(LoadingHide, (state, { payload }): boolean => false)
//   on(LoadingShow, (state, action) => ({ loading: true }))
// );

export const reducer = createReducer(
  initialState,
  on(LoadingShow, (state, action) => ({ loading: true })),
  on(LoadingHide, (state, action) => ({ loading: false }))
);


// export function reducer(
//     state = initialState,
//     action: LoadingShow
//   ): LoadingState {
//     switch (LoadingShow) {
//       case authAction.AuthActionTypes.AUTH_LOGOUT:
  
//         return initialState;
//       default: {
//         return state;
//       }
//     }
//   }
  