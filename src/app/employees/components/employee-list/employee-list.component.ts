import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule} from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone:true,
  imports:[
    GridModule,
    DropDownListModule,
    DialogModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})

export class EmployeeListComponent implements OnInit {
  public employees: Employee[] = [];
  public pageSettings: Object;
  public filteredEmployees: Employee[] = [];
  public searchText = '';
  public selectedSearchOption = '';

  public searchOptions: { [key: string]: Object }[] = [
    { id: 'name', name: 'Name' },
    { id: 'email', name: 'Email' },
    { id: 'department', name: 'Department' },
    { id: 'position', name: 'Position' }
  ];

  public dropdownFields: Object = { text: 'name', value: 'id' };

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

  onSearch(): void {
    if (this.searchText.trim() === '') {
      this.filteredEmployees = [...this.employees];
    } else {
      const searchTerm = this.searchText.toLowerCase();
      const searchOption = this.selectedSearchOption as keyof Employee;
      this.filteredEmployees = this.employees.filter(employee =>
        `${employee[searchOption]}`.toLowerCase().includes(searchTerm)
      );
    }
    console.log(this.filteredEmployees)
  }

}
