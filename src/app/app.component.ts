import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetUsers } from './Store/Actions/user.actions';
import { selectUserList } from './Store/Selectors/user.selectors';
import { IAppState } from './Store/States/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-demo';
  users$ = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }
}
