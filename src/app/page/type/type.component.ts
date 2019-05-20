import { Component, OnInit } from '@angular/core';
import { Type } from '../../class/type';
import {TypeService} from '../../service/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  types: Type[];
  constructor(private typeService: TypeService) {}
  ngOnInit() {
    this.getTypes();
  }
  getTypes() {
    this.typeService.getTypes().subscribe(data => {
      this.types = data;
    });
  }
}
