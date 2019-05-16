import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login } from '../class/login';
import { Globals } from '../globals';
import { User} from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginSubject: BehaviorSubject<Login> ;
  private loginObs: Observable<Login>;

  private userSubject: BehaviorSubject<User>;
  private userObs: Observable<User>;
  constructor(private http: HttpClient) {
    const token = JSON.parse(localStorage.getItem(Globals.APP_USER_TOKEN));
    this.loginSubject = new BehaviorSubject<Login>(token);
    this.loginObs = this.loginSubject.asObservable();
  }
  public login(username: string, password: string) {
    return this.http.post<Login>(Globals.APP_API + 'login_check', {username, password }).pipe(map((data) => {
      if (data && data.token) {
        localStorage.setItem(Globals.APP_USER_TOKEN, JSON.stringify(data));
        this.loginSubject.next(data);
        }
      return data;
    }));
  }
  public get tokenData() {
    return JSON.parse(localStorage.getItem(Globals.APP_USER_TOKEN));
  }
  public profile() {
    return this.http.get<User>(Globals.APP_API + 'auth/profile', {}).pipe(map((user) => {
      if (user) {
        localStorage.setItem(Globals.APP_USER, JSON.stringify(user));
        this.loginSubject.next(user);
      }
      return user;
    }));
  }
}
