import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-items',
  templateUrl: './requested-items.component.html',
  styleUrls: ['./requested-items.component.css']
})
export class RequestedItemsComponent implements OnInit {

  products:any[]
  type=[
    {name:"All"},
    {name:"Regular"},
    {name:"Average"}
  ]
  loading = false

  constructor() { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.products = [
      {
        id:1,
        name:'Product1',
        price:1000,
        isRegular:true
      },
      {
        id:2,
        name:'Product2',
        price:2000,
        isRegular:false        
      },
      {
        id:3,
        name:'Product3',
        price:3000,
        isRegular:true
      },
      {
        id:4,
        name:'Product4',
        price:4000,
        isRegular:false
      },
      {
        id:5,
        name:'Product5',
        price:5000,
        isRegular:false        
      },
      {
        id:6,
        name:'Product6',
        price:1000,
        isRegular:true
      }
    ]
  }


}
