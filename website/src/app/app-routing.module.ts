import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { MycartComponent } from './mycart/mycart.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:HomepageComponent},
    {path:'product-detail/:id',component:ProductdetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'mycart',component:MycartComponent}



];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}