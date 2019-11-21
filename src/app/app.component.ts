import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './Employee.service';
import {Employee} from './Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor (private employeeService:EmployeeService){}
  employees:Employee[]; 

  id:any;

  ngOnInit(){
    this.id=null;
    this.getAllUsers();
  }

  getAllUsers(){
    this.employeeService.getEmployees().subscribe(
      response=>{
        console.log(response);
        this.employees=response;
      },
      error => {

      }
    );
  }

  getById(){
    this.employees=[];
    console.log("Event");
    if(this.id){

    this.employeeService.getEmployeeById(this.id).subscribe(
      response=>{
        console.log(response);
        this.employees.push(response);
      },
      error => {

      }
    );
    }else{
      this.getAllUsers();
    }
    }
  }