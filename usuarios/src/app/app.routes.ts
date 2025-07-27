import { Routes } from '@angular/router';
import { UserListComponent } from './features/User/user-list/user-list.component';
import { UserFormComponent } from './features/User/user-form/user-form.component';
import { C404Component } from './Layout/c404/c404.component';


export const routes: Routes = [
    {path: "", pathMatch: 'full', redirectTo: "inicio"},
    {path: "inicio", component: UserListComponent},
    {path: "form", component: UserFormComponent},
    {path: '**', component: C404Component}
];
