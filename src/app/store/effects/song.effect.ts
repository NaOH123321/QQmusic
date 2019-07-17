import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  pluck,
  startWith,
  switchMap
} from 'rxjs/operators';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { SongService } from '../../services/song.service';
import { loadAll, loadAllSuccess } from '../actions';

/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

@Injectable()
export class SongEffects {
  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      // startWith(loadAll()),
      map(action => action.payload),
      switchMap(parameter =>
        this.songService$
          .getAll(parameter)
          .pipe(map(val => loadAllSuccess({ payload: val })))
      )
    )
  );

  //   load$ = createEffect( () => this.actions$.pipe(
  //     ofType(load),
  //     pluck('id'),
  //     switchMap( id => this.songService.show(id).pipe(
  //       map(contact => loadSuccess({contact}))
  //     ))
  //   ));

  constructor(private actions$: Actions, private songService$: SongService) {}
}
