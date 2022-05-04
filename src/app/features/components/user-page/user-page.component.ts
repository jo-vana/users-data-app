import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/shared/services/users.service";
import { take } from "rxjs/operators";

@Component({
    selector: 'app-user-page',
    templateUrl: 'user-page.component.html',
    styleUrls: ['user-page.component.scss']
})

export class UserPageComponent implements OnInit {
    user: any;

    constructor(private route: ActivatedRoute,
        private service: UsersService) {}

    ngOnInit() {
        this.user = this.route.snapshot.params;
        this.getData();
    }

    getData() {
        let id = this.route.snapshot.params.id;
        this.service.getOneUser(id)
            .pipe(take(1))
            .subscribe(data => {
                this.user = data;

        });
    }
}