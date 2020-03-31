import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { MatButtonModule,
          MatTabsModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
// import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent, CustomerReportComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NgSelectModule
    // NgbTabset
  ]
})
export class CustomerModule { }
