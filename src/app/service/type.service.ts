import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {Type} from '../class/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
    constructor(private http: HttpClient) {
    }
  public getTypes() {
    return this.http.get<Type[]>(Globals.APP_API + ('type'));
    }
}
