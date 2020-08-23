import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  constructor(private productServi :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: { name: string; lastname: string, email: string; password: string, mobileno:number;
      address: string; city:string; state:string; zip:number; })
  {

    console.log(postData);

    this.http .post('http://localhost:3004/api/signup',postData).subscribe(responseData => {
        console.log(responseData);
        alert("welcome account is created");
      });

  }

}
