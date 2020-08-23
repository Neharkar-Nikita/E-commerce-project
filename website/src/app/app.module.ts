import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MycartComponent } from './mycart/mycart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyorderComponent } from './myorder/myorder.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
 import {ProductServices} from './product.service';
 import {CartServices} from './cart.service';


// import { NewOrderServices } from './neworder.service';
import { NewOrderServices } from './neworder.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductdetailsComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    MyorderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductServices,CartServices,NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
