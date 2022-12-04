import { createSelector } from '@ngrx/store';
import { IAppState } from '../States/app.state';
import { IUserState } from '../States/user.state';

const selectUsers = (state: IAppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
  selectUsers,
  (state: IUserState) => state.selectedUser
);
