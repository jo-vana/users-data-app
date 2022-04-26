import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    constructor( private http: HttpClient) {}

    getData() {
        let url = "https://gorest.co.in/public/v2/users";
        return this.http.get(url);
    }
}