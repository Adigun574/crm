import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale.service';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  sales = []
  customers = []

  constructor(
    private saleService:SaleService,
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.getAllSales()
    this.getAllCustomers()
  }

  getAllSales(){
    this.saleService.getAllSales().subscribe(data=>{
      this.sales = <any[]>data
    },
      err=>{})
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = <any[]>data
    },
      err=>{})
  }

}
