import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePasswordComponent } from './features/components/create-password/create-password.component';
import { UserPageComponent } from './features/components/user-page/user-page.component';
import { UsersListComponent } from './features/components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserPageComponent,
    CreatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
