import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports:[
    GridModule,
    DropDownListModule,
    DialogModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  public employees: Employee[] = [];
  public pageSettings: Object;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.pageSettings = { pageSize: 10 };
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  navigateToCreate(): void {
    this.router.navigate(['/employee/create']);
  }

  editEmployee(employee: Employee): void {
    this.router.navigate(['/employee/edit', employee.id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.loadEmployees();
  }
}
