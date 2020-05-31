import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private generalService:GeneralService,
    private httpClient:HttpClient
  ) { }

  saveProduct(obj){
    return this.httpClient.post(`${this.generalService.api}Product/SaveProduct`,obj)
  }

  updateProduct(obj){
    return this.httpClient.put(`${this.generalService.api}Product/UpdateProduct`,obj)
  }

  getProductById(id){
    return this.httpClient.get(`${this.generalService.api}Product/GetProductByID/${id}`)
  }

  getAllProducts(){
    return this.httpClient.get(`${this.generalService.api}Product/GetAllProducts`)
  }

  getBestSellingProduct(){
    return this.httpClient.get(`${this.generalService.api}Product/BestSellingProducts`)
  }
}
