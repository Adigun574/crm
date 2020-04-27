import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // products:Product[] = []
  products = []
  addProductForm:FormGroup
  CostPrice:number
  SalePrice:number
  saving:boolean = false

  constructor(
    private modalService:NgbModal,
    private productService: ProductService,
    private fb:FormBuilder,
    private router:Router
  ) {
    this.addProductForm = this.fb.group({
        Name: [,Validators.required],
        Quantity: [,Validators.required],
        Image: [],
        PriceID: [],
        Price: [],
        ID: [],
        UserCreated: [],
        UserModified: [],
        DateCreated: ["2020-04-27T19:49:26.155Z"],
        DateModified: ["2020-04-27T19:49:26.155Z"]
    })
   }

  ngOnInit(): void {
    this.getAllProducts()
  }

  open(content){
    this.modalService.open(content)
  }

  addProduct(){
    if(this.addProductForm.invalid){
      console.log("invalid")
    }
    else{
      this.saving = true
      let priceObj = {
        ID: 0,
        UserCreated: 0,
        UserModified: 0,
        DateCreated: "2020-04-27T19:49:26.154Z",
        DateModified: "2020-04-27T19:49:26.155Z",
        CostPrice: this.CostPrice,
        SalePrice: this.SalePrice
      }
      this.addProductForm.value.Price = priceObj
      console.log(this.addProductForm.value)
      // this.productService.saveProduct(this.addProductForm.value).subscribe(data=>{
      // this.saving = false
      //   console.log(data)
      // },
        // err=>{
        //   this.saving = false
        // })
    }

  }

  viewProduct(id){
    this.router.navigateByUrl(`/main/product/${id}`)
  }


  getAllProducts(){
    // this.productService.getAllProducts().subscribe(data=>{
    //   this.products = <Product[]>data
    // })
    this.products = [
        {
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
        },
        {
          "name": "string",
          "quantity": 0,
          "image": "string",
          "priceID": 2,
          "price": {
            "id": 2,
            "userCreated": 0,
            "userModified": 0,
            "dateCreated": "2020-04-27T06:50:32.6169559",
            "dateModified": "0001-01-01T00:00:00",
            "costPrice": 0,
            "salePrice": 0
          },
          "id": 2,
          "userCreated": 0,
          "userModified": 0,
          "dateCreated": "2020-04-27T06:50:34.4753225",
          "dateModified": "0001-01-01T00:00:00"
        },
        {
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
        },
        {
          "name": "string",
          "quantity": 0,
          "image": "string",
          "priceID": 2,
          "price": {
            "id": 2,
            "userCreated": 0,
            "userModified": 0,
            "dateCreated": "2020-04-27T06:50:32.6169559",
            "dateModified": "0001-01-01T00:00:00",
            "costPrice": 0,
            "salePrice": 0
          },
          "id": 2,
          "userCreated": 0,
          "userModified": 0,
          "dateCreated": "2020-04-27T06:50:34.4753225",
          "dateModified": "0001-01-01T00:00:00"
        },
        {
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
        },
        {
          "name": "string",
          "quantity": 0,
          "image": "string",
          "priceID": 2,
          "price": {
            "id": 2,
            "userCreated": 0,
            "userModified": 0,
            "dateCreated": "2020-04-27T06:50:32.6169559",
            "dateModified": "0001-01-01T00:00:00",
            "costPrice": 0,
            "salePrice": 0
          },
          "id": 2,
          "userCreated": 0,
          "userModified": 0,
          "dateCreated": "2020-04-27T06:50:34.4753225",
          "dateModified": "0001-01-01T00:00:00"
        }
    ]
  }

}
