import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../../class/type';
import { TypeService } from '../../service/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TailleComponent implements OnInit {
  error: boolean;
  type: Type[];
  loading: boolean;
  types: any;

  constructor(private typeService: TypeService, private router: Router) { }

  ngOnInit() {
    this.getType();
  }
  getAllTailles() {
    this.typeService.getTypes()
        .subscribe((data: Type[]) => {
          this.type = data;
        });
  }

  deleteType(id: number) {
    this.loading = true;
    this.typeService.deleteType(id)
        .subscribe(() => {
          this.getAllTypes();
        });
  }

  createType() {
    this.router.navigate(['type/add']);
  }
}