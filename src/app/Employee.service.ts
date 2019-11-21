import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Employee} from './Employee.model';

@Injectable()
export class EmployeeService{

    urlApi="http://localhost:8081/api/employees/";//"http://masglobaltestapi.azurewebsites.net/api/Employees";//

    constructor(private httpClient:HttpClient){

    }
    getEmployees(){
        return this.httpClient.get<Employee[]>(this.urlApi);
    }

    getEmployeeById(id){
        return this.httpClient.get<Employee>(this.urlApi+id);
    }


}