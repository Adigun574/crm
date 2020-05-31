import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale.service';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css']
})
export class SalesHistoryComponent implements OnInit {

  sales:any[] = []
  customers:any[] = []
  loadingReport:boolean = false

  constructor(
    private saleService:SaleService,
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomers()
    this.getSales()
  }

  getSales(){
    this.loadingReport = true
    this.saleService.getAllSales().subscribe(data=>{
      this.sales = <any[]>data
      this.loadingReport = false
    },
      err=>{
        this.loadingReport = false
      })
  }

  getCustomers(){
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = <any[]>data
    })
  }

  getCustomerName(id){
    let customer = this.customers.find(x=>x.id == id)
    return `${customer.firstName} ${customer.lastName}`
  }

}
