import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of Employees">
      <li>{{employee.id}}. {{employee.name}}-{{employee.age}}</li>
    </ul>
    `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public Employees = [];
  constructor(private _employeeService :EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe(data => this.Employees = data);
  
  }

}
