import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserHttp } from '../Models/http-models/user-http.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUserHttp> {
    return this._http.get<IUserHttp>(environment.apiUrl + 'user');
  }
}
