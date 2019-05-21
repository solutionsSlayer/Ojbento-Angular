import {Component, OnInit} from '@angular/core';
import {TypeService} from '../../../service/type.service';
import {Type} from '../../../class/type';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
    selector: 'app-type-edit',
    templateUrl: './type-edit.component.html',
    styleUrls: ['./type-edit.component.scss']
})
export class TypeEditComponent implements OnInit {

    type: Type;
    typeForm: FormGroup;
    constructor(private typeService: TypeService,
                private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router) { }

    ngOnInit() {
        this.typeForm = this.fb.group({
            name: ['', Validators.required]
        });
        this.activatedRoute.params
            .subscribe((params) => {
                this.typeService.getType(params.id)
                    .subscribe((type: Type) => {
                        this.createForm(type);
                    });
            });
    }
    createForm(type: Type) {
        this.type = type;
        this.typeForm.setValue({
            name: type.name
        });
    }
    saveType() {
        const val = this.typeForm.value;
        this.typeService.editType(this.type.id, val.name)
            .subscribe((type: Type) => {
                this.createForm(type);
            });
        this.goBack();
    }
    goBack(): void {
        this.router.navigate(['/type']);
    }
}
