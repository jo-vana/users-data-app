import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class PasswordService {
    constructor( private http: HttpClient) {}

    postData(formData: any) {
        this.http.post('https://test111.free.beeceptor.com/my/api/path', formData)
            .subscribe((result) => {

            })
    }
}