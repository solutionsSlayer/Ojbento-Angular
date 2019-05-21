import { Component, OnInit } from '@angular/core';
import {TypeService} from '../../../service/type.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Type} from '../../../class/type';
import {Router} from '@angular/router';

@Component({
    selector: 'app-type-add',
    templateUrl: './type-add.component.html',
    styleUrls: ['./type-add.component.scss']
})
export class TypeAddComponent implements OnInit {

    typeForm: FormGroup;
    constructor(private typeService: TypeService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.typeForm = this.fb.group({
            name: [null, Validators]
        });
    }

    createType() {
        const val = this.typeForm.value;
        this.typeService.createType(val.name)
            .subscribe( (type: Type) => {
                this.router.navigate(['/type']);
            });
    }
}
