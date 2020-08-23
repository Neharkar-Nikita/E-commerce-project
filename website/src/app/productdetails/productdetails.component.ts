// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { CartServices } from '../cart.service';
import { Mycart } from '../cart.model';
import { ProductNew } from '../productNew.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id: number;
  products : any;
  packsize:any;
  @ViewChild('ingre_qty') ingre_qty : ElementRef;

  constructor( private route: ActivatedRoute,
    private  router: Router,private http:HttpClient,private cartServi:CartServices) { }

    ngOnInit() {

      let id2 = this.route.snapshot.paramMap.get('id');

      

      this.http.get("http://localhost:3004/api/product/"+id2).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products =  posts;

       
       
      


     })
   
    ;
     
    }

    addTocart()
    {
      console.log(this.products._id);
      cart :Mycart;
      const qty = this.ingre_qty.nativeElement.value;

      let id = this.products._id;
      let product_name = this.products.name;
      let product_count = qty;
      let product_image = this.products.productImagePath;
      let product_price = this.products.price;
      let product_total = qty * product_price;

      console.log(this.products.name);
      console.log(qty);
      const cartItems = new Mycart(this.products._id,product_name,product_count,product_image,product_price,product_total);

      console.log(cartItems);
       this.cartServi.addCart(cartItems);
      this.router.navigateByUrl('/mycart');
    }

}

