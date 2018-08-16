import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from '@angular/router';


import { AdminFormComponent } from './components/admin-manage/admin-form/admin-form.component';
import { LoginAdminComponent } from './components/admin-manage/login-admin/login-admin.component';
import { DashboardComponent } from './components/admin-manage/dashboard/dashboard.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin-login', component: LoginAdminComponent },
    { path: 'op', component: AdminFormComponent },
    { path: 'admin/dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AdminFormComponent,
        LoginAdminComponent,
        DashboardComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }