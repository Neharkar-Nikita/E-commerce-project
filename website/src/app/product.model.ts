import {Category} from './category.model';

export class Product
{
    public _id? : string
    public name : string;
     public packsize : string;
    public productImagePath : string;
    public price : string;
    // public stock : string;
    public category :[Category]

    constructor(p_name:string,p_desc:string,p_imagePath:string,p_price:string)
    {

        this.name = p_name;
         this.packsize = p_desc;
        this.productImagePath = p_imagePath;
        this.price = p_price;
       

    }
}