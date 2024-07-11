
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/components/employee-detail/employee-detail.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employee/create', component: EmployeeDetailComponent },
  { path: 'employee/edit/:id', component: EmployeeDetailComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
