import {Product} from './product.model';

import { Component, EventEmitter, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductServices
{

    products : Product[] =
  [
      new Product('onion','Frash onoin','onion.jpg','14Rs(1kg)'),  //object create

      new Product('Garlic','frash garlic','garlic.jpg','12Rs (1kg)'),
      new Product('Ginger','frash Ginger','Ginger.jpg','50Rs.(500g)'),
      new Product('Apple','Frash apple','apple.jpg','300RS(6pack)'),

      new Product('Mango','Frash mango','mango.jpg','80Rs. (1kg)'),  //object create


  ];

    constructor(private http:HttpClient)
    {

    }


    getProduct()
    {
        return this.products.slice();
    }


    fetchData()
    {
        this.http.get<{[key:string]:Product}>("http://localhost:3004/api/product")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;


    })).subscribe(posts =>{
        console.log("array"+posts);

       this.products = posts;
     })

    ;
    }



}