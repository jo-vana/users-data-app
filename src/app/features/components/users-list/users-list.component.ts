import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "src/app/shared/services/users.service";

@Component({
    selector: 'app-users-list',
    templateUrl: 'users-list.component.html',
    styleUrls: ['users-list.component.scss']
})

export class UsersListComponent {
    userList: any;

    constructor( private users: UsersService,
        private router: Router) {
        this.users.getData().subscribe(data => {
            console.log(data);
            this.userList = data;
        })
    }

    onClick(item: any) {
        console.log('user', item);
        let url: string[];
        url = ['user/' + item.id];
        this.router.navigate(url);
    }
}