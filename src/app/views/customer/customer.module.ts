import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { MatButtonModule,
          MatTabsModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
    // NgbTabset
  ]
})
export class CustomerModule { }
