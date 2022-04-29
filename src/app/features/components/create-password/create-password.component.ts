import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { PasswordService } from "src/app/shared/services/password.service";
import { ComparePassword } from "./customvalidator.validator";


@Component({
    selector: 'app-create-password',
    templateUrl: 'create-password.component.html',
    styleUrls: ['create-password.component.scss']
})

export class CreatePasswordComponent implements OnInit {
    createPasswordForm! : FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private passService: PasswordService) {}
    
    ngOnInit() {
        this.createPasswordForm = this.fb.group({
            emailAddress: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(new RegExp(/^[a-zA-Z ']+[0-9]+$/))]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
        }, {
            validator: ComparePassword("password", "confirmPassword")
        })
    }

    onCreatePassword() {
        this.submitted = true;
        const formData = this.createPasswordForm.value;
        console.log('formData', formData)
        if(this.createPasswordForm.invalid) {
            return
        } else {
            this.passService.postData(formData);
        }
        this.resetForm(this.createPasswordForm);
    }

    resetForm(form: FormGroup) {
        form.reset();
        Object.keys(form.controls).forEach(key => {
            form.get(key)?.setErrors(null);
        }) 
    }
}