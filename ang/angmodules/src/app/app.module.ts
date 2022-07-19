import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './employee/header/header.component';
import { EmployeeItemComponent } from './employee/employee-item/employee-item.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeItemComponent,
    EmployeesComponent,
    AddEmployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
