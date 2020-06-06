import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit {

  customers:any[]
  loading = false
  loadingReport:boolean = false

  constructor(
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.getTopCustomers()
  }

  getTopCustomers(){
    this.loadingReport = true
    this.customerService.getTopCustomers().subscribe(data=>{
      this.customers = <any[]>data
      this.loadingReport = false
    },
      err=>{
        this.loadingReport = false
      })
  }
}
