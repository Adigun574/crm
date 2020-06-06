import { Component, OnInit, Input, NgZone } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { date } from '../../../classes/date';
import { HttpClient } from '@angular/common/http';



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
  currentUser:User
  //
  item={
    image : null,
    imageUrl: null
  }
  image

  constructor(
    private modalService:NgbModal,
    private productService: ProductService,
    private fb:FormBuilder,
    private router:Router,
    private http: HttpClient
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("tunnexcrmuser"))
    this.addProductForm = this.fb.group({
        name: [,Validators.required],
        quantity: [,Validators.required],
        image: [''],
        costPrice:[],
        salePrice:[],
        id: [0],
        userCreated: [this.currentUser.id],
        userModified: [0],
    })   
   }

  ngOnInit(): void {
    this.getAllProducts()
  }

  selectImage(e){
    const file = e.target.files[0]
    this.image = file
    this.item.imageUrl = URL.createObjectURL(file)
    // this.uploadPicture()
  }

  uploadPicture(){
    this.saving = true
    if(this.image){
      // const CLOUDINARY_URL="https://api.cloudinary.com/v1_1/dk0ydrw94/upload"
      // const CLOUDINARY_UPLOAD_PRESET="ym00sgsu"
      const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dsfkplrl3/upload"
      const CLOUDINARY_UPLOAD_PRESET="shdexw2p"
      let formData = new FormData()
      formData.append('file',this.image)
      formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET)
      this.http.post(CLOUDINARY_URL,formData).subscribe(data=>{
        let res = <any>data
        // console.log(res.secure_url)
        this.addProductForm.value.image = res.secure_url
        this.addProduct()
      },
        err=>{
          console.log(err)
          this.addProductForm.value.image = "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          this.addProduct()
        })
    }   
    else{
      this.addProductForm.value.image = "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      this.addProduct()
    } 
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
      // console.log(this.addProductForm.value)
      // console.log(JSON.stringify(this.addProductForm.value))
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
    this.displayedProducts = this.products.filter(x=>x.name.toLowerCase().includes(this.searchKey.toLowerCase()))
  }

}
