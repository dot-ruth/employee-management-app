import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../components/employee-detail/employee-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeListComponent,
  ]
})
export class EmployeesModule { }
