import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {

  customers:any[]
  type=[
    {name:"All"},
    {name:"Regular"},
    {name:"Average"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.customers = [
      {
        id:1,
        name:'Adigun Ibrahim',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        isRegular:true
      },
      {
        id:2,
        name:'Adigun Adedotun',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        isRegular:false        
      },
      {
        id:3,
        name:'Adigun Akanni',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        isRegular:true
      },
      {
        id:4,
        name:'Adigun Ibrahim',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        isRegular:false
      },
      {
        id:5,
        name:'Adigun Adedotun',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        isRegular:false        
      },
      {
        id:6,
        name:'Adigun Akanni',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        isRegular:true
      }
    ]
  }

}
