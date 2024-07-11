import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  standalone:true,
  imports:[
    GridModule,
    DropDownListModule,
    DialogModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public employeeForm!: FormGroup;
  public submitted = false;
  public showDialog = true;
  private employeeId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      position: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      if (this.employeeId) {
        const employee = this.employeeService.getEmployeeById(this.employeeId);
        if (employee) {
          this.employeeForm.patchValue(employee);
        }
      }
    });
  }

  get f() { return this.employeeForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.employeeForm.invalid) {
      return;
    }

    const employeeData: Employee = this.employeeForm.value;
    if (this.employeeId) {
      employeeData.id = this.employeeId;
      this.employeeService.updateEmployee(employeeData);
    } else {
      this.employeeService.createEmployee(employeeData);
    }

    this.router.navigate(['/employee']);
  }

  onCancel(): void {
    this.router.navigate(['/employee']);
  }

  onDialogClose(): void {
    this.router.navigate(['/employee']);
  }
}
