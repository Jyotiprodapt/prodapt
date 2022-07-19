import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    EmployeeItemComponent,
    EmployeesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
