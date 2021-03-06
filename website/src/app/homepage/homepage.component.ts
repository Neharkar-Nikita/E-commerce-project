import { Component, OnInit } from '@angular/core';
//  import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  products : Product[];
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<{[key:string]:Product}>("http://localhost:3004/api/product")
    .pipe(map(responseData =>{
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))     //check responseData have data or not
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        //console.log(postArray);
        return postArray;

           
    })).subscribe(postArray =>{
     //   console.log("array"+posts);
  
       this.products = postArray;
     })
   
    ;

   
   
  }

}