import { Routes } from '@angular/router';
import { UserListComponent } from './features/User/user-list/user-list.component';
import { UserFormComponent } from './features/User/user-form/user-form.component';
import { C404Component } from './Layout/c404/c404.component';
import { UserDetailComponent } from './features/User/user-list/user-detail/user-detail.component';


export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "home"},
    {path: "home", component: UserListComponent},
    {path: "newuser", component: UserFormComponent},
    {path: 'user/:id', component: UserDetailComponent},
    {path: '**', component: C404Component}
];
