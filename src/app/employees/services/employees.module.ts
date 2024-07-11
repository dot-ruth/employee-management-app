import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../components/employee-detail/employee-detail.component';
import { EmployeesRoutingModule } from './employees-routing.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    DropDownListModule,
    DialogModule
  ]
})
export class EmployeesModule { }
