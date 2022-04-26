import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-user-page',
    templateUrl: 'user-page.component.html',
    styleUrls: ['user-page.component.scss']
})

export class UserPageComponent implements OnInit {
    user: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        console.log('user', this.user)
        console.log(this.route.snapshot.params)
        this.user = this.route.snapshot.params;
    }
}