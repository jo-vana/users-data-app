import { HttpClient } from "@angular/common/http";
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

    constructor(private fb: FormBuilder,
                private http: HttpClient) {}
    
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
            this.http.post('https://test111.free.beeceptor.com/my/api/path', formData)
            .subscribe((result) => {

            })
        }
        
    }
}