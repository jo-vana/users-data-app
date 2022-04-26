import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/shared/services/users.service";

@Component({
    selector: 'app-users-list',
    templateUrl: 'users-list.component.html',
    styleUrls: ['users-list.component.scss']
})

export class UsersListComponent implements OnInit {
    userList: any;

    constructor( private users: UsersService) {
        this.users.getData().subscribe(data => {
            console.log(data);
            this.userList = data;
        })
    }

    ngOnInit(): void {
        this.userList;
    }

    onClick(item: any) {
        console.log('click', item)
    }
}