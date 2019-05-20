import { Component, OnInit } from '@angular/core';
import { Type } from '../../class/type';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../globals';
import {TypeService} from '../../service/type.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private type: TypeService) {

  }
  ngOnInit() {

  }

}
