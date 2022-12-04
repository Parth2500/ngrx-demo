import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../States/app.state';
import {
  GetUser,
  GetUserSuccess,
  GetUsers,
  GetUsersSuccess,
  EUserActions,
} from '../Actions/user.actions';
import { UserService } from '../../Services/user.service';
import { IUserHttp } from '../../Models/http-models/user-http.interface';
import { selectUserList } from '../Selectors/user.selectors';

@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetUser>(EUserActions.GetUser),
      map((action) => action.payload),
      withLatestFrom(this._store.pipe(select(selectUserList))),
      switchMap(([id, users]) => {
        const selectedUser = users.filter((user) => user.id === +id)[0];
        return of(new GetUserSuccess(selectedUser));
      })
    )
  );

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetUsers>(EUserActions.GetUsers),
      switchMap(() => this._userService.getUsers()),
      switchMap((userHttp: IUserHttp) =>
        of(new GetUsersSuccess(userHttp.Users))
      )
    )
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
