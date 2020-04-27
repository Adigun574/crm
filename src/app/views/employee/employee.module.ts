import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { TrainingProgramsComponent } from './training-programs/training-programs.component';
import { SkillMonitoringComponent } from './skill-monitoring/skill-monitoring.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RoleComponent } from './role/role.component';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDetailComponent,
    TrainingProgramsComponent,
    SkillMonitoringComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    NgSelectModule,
    NgxChartsModule,
    SharedModule
  ]
})
export class EmployeeModule { }
