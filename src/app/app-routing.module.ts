import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePasswordComponent } from './features/components/create-password/create-password.component';
import { UserPageComponent } from './features/components/user-page/user-page.component';
import { UsersListComponent } from './features/components/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'create-password', component: CreatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
