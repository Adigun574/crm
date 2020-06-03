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

  products:Product[] = []
  // products = []
  addProductForm:FormGroup
  CostPrice:number
  SalePrice:number
  saving:boolean = false
  submitted:boolean = false
  loading:boolean = false
  searchKey:string = ''
  displayedProducts:Product[] = []

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
        PriceID: [0],
        // Price: [],
        CostPrice:[],
        SalePrice:[],
        ID: [0],
        UserCreated: [1],
        UserModified: [0],
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
    this.submitted = true
    if(this.addProductForm.invalid){
      return
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
      // console.log(this.addProductForm.value)
      this.productService.saveProduct(this.addProductForm.value).subscribe(data=>{
      this.saving = false
      this.submitted = false
      this.getAllProducts()
      this.modalService.dismissAll()
      },
        err=>{
          this.saving = false
          this.submitted = true
          this.modalService.dismissAll()
        })
    }

  }

  viewProduct(id){
    this.router.navigateByUrl(`/main/product/${id}`)
  }


  getAllProducts(){
    this.loading = true
    this.productService.getAllProducts().subscribe(data=>{
      this.products = <Product[]>data
      this.displayedProducts = this.products
      this.loading = false
    })
  }

  filterProduct(){
    this.displayedProducts = this.products.filter(x=>x.name.includes(this.searchKey))
  }

}
