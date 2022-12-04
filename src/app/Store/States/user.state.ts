import { IUser } from '../../Models/user.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: { id: 0, name: '', cardNumber: '', cardType: '' },
};
