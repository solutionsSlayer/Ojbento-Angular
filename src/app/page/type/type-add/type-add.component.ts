import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeService } from '../../../service/type.service';

@Component({
    selector: 'app-type-add',
    templateUrl: './type-add.component.html',
    styleUrls: ['./type-add.component.scss']
})

export class TypeAddComponent implements OnInit {
    public typeForm: FormGroup;
    constructor(private fb: FormBuilder, private typeService: TypeService, private router: Router) { }

    ngOnInit() {
        this.typeForm = this.fb.group({
            name : ['', Validators.required ]
        });
    }
    createType() {
        const val = this.typeForm.value;
        this.typeService.createType(val.name).subscribe(() => {
            this.router.navigate(['/type']);
        });
    }
    backclicked() {
        this.router.navigate(['/type']);
    }
}