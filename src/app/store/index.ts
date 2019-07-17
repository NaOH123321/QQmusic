import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromRoot from './reducers';
import { environment } from './../../environments/environment';

// console.log all actions
export function logger(
  reducer: ActionReducer<fromRoot.State>
): ActionReducer<fromRoot.State> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

// export function storeLoginGuard(
//   reducer: ActionReducer<State>
// ): ActionReducer<State> {
//   return function(state, action) {
//     if (action.type === authActions.AuthActionTypes.AUTH_LOGOUT) {
//       return reducer(undefined, action);
//     }
//     return reducer(state, action);
//   };
// }

export const metaReducers: MetaReducer<
  fromRoot.State
>[] = !environment.production ? [logger] : [];

@NgModule({
  imports: [
    StoreModule.forRoot(fromRoot.ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false
      }
    }),
    // StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : []
  ]
})
export class AppStoreModule {}
