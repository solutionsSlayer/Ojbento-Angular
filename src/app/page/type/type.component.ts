import {Component, OnInit} from '@angular/core';
import {Type} from '../../class/type';
import {TypeService} from '../../service/type.service';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {Globals} from '../../globals';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  uri = Globals.APP_API + 'type/';
  types: Type[];

  constructor(private typeService: TypeService, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.getTypes();
  }

  private log(log: string) {
    // tslint:disable-next-line:no-console
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getTypes() {
    this.typeService.getTypes().subscribe(data => {
      this.types = data;
    });
  }

  delete(type: Type): void {
    this.typeService.deleteType(type)
        .subscribe(_ => this.getTypes());
  }

}
