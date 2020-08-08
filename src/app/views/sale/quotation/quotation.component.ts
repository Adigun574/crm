import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  products:Product[]
  cart = []
  qtyArray = []

  constructor(
    private prodcutService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.prodcutService.getAllProducts().subscribe(data=>{
      this.products = <Product[]>data
      console.log(data)
    },
      err=>{
        console.log(err)
      })
  }

  addToCart(product){
    this.cart.push(product)
    this.qtyArray.push(1)
  }

  quickSelect(product){
    this.cart.push(product)
    this.qtyArray.push(1)
  }

  deleteProduct(i){
    this.cart.splice(i,1)
    this.qtyArray.splice(i,0)
  }

  reset(){
    this.cart = []
    this.qtyArray = []
  }

  calculateTotal(){
    
  }

}
