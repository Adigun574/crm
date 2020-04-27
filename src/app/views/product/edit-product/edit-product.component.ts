import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' ;
import { ProductService } from '../../../services/product.service' ;
import { Product } from '../../../models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId:number
  // product:Product
  product
  updating:boolean = false

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService
  ) { 
    this.productId = +this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    // this.productService.getProductById(this.productId).subscribe(data=>{
    //   this.product = <Product>data
    // },
    //   err=>{

    //   })
    this.product = {
      "name": "malt",
      "quantity": 20,
      "image": "imageString",
      "priceID": 1,
      "price": {
        "id": 1,
        "userCreated": 0,
        "userModified": 0,
        "dateCreated": "2020-03-30T15:10:33.2058236",
        "dateModified": "2020-03-30T21:49:17.7538787",
        "costPrice": 20,
        "salePrice": 30
      },
      "id": 1,
      "userCreated": 0,
      "userModified": 0,
      "dateCreated": "2020-03-30T15:10:43.8541328",
      "dateModified": "2020-03-30T21:49:15.8988712"
    }
  }

  updateProduct(){
    this.updating = true
    // this.productService.updateProduct(this.product).subscribe(data=>{
    //   this.updating = false
    //   console.log(data)
    // },
    //   err=>{

    //   })
  }

}
