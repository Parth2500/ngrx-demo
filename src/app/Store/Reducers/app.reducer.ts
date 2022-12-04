import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../States/app.state';
import { userReducer } from './user.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducer,
};
