import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ComparePassword } from "./customvalidator.validator";

@Component({
    selector: 'app-create-password',
    templateUrl: 'create-password.component.html',
    styleUrls: ['create-password.component.scss']
})

export class CreatePasswordComponent implements OnInit {
    createPasswordForm! : FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {

    }
    ngOnInit() {
        this.createPasswordForm = this.fb.group({
            emailAddress: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
        }, {
            validator: ComparePassword("password", "confirmPassword")
        })
    }

    onCreatePassword() {
        this.submitted = true;
        if(this.createPasswordForm.invalid) {
            return
        } 
        console.log(this.createPasswordForm.value)
    }
}