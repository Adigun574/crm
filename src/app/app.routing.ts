import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './util/auth.guard';
import { CustomersComponent } from './views/customer/customers/customers.component';
import { CustomerDetailsComponent } from './views/customer/customer-details/customer-details.component';
// import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'customers',
        component:CustomersComponent
      },
      {
        path:'customer/:id',
        component:CustomerDetailsComponent
      }
    ]
  }
  // {
  //   path: '',
  //   redirectTo: 'home', // should be dashboard but only for user  with user credentials
  //   pathMatch: 'full'
  // },
  // {
  //   path: '404',
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: P500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: {
  //     title: 'Home Page'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'employee',
  //       loadChildren: () =>
  //         import('./views/employee/employee.module').then(m => m.EmployeeModule)
  //     },
  //     {
  //       path: 'leave',
  //       loadChildren: () =>
  //         import('./views/leave/leave.module').then(m => m.LeaveModule)
  //     },
  //     {
  //       path: 'attendance',
  //       loadChildren: () =>
  //         import('./views/attendance/attendance.module').then(
  //           m => m.AttendanceModule
  //         )
  //     },
  //     {
  //       path: 'base',
  //       loadChildren: () =>
  //         import('./views/base/base.module').then(m => m.BaseModule)
  //     },
  //     {
  //       path: 'payroll',
  //       loadChildren: () =>
  //         import('./views/allPayroll/payroll.module').then(m => m.PayrollModule)
  //     },

  //     {
  //       path: 'charts',
  //       loadChildren: () =>
  //         import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./views/dashboard/dashboard.module').then(
  //           m => m.DashboardModule
  //         )
  //     },

  //     {
  //       path: 'notifications',
  //       loadChildren: () =>
  //         import('./views/notifications/notifications.module').then(
  //           m => m.NotificationsModule
  //         )
  //     },

  //     {
  //       path: 'widgets',
  //       loadChildren: () =>
  //         import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
  //     }
  //   ]
  // },
  // { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
