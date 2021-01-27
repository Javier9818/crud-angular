import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};
  categorias: any = [];
  unidades: any = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getEmployee(this.id).subscribe((data) => {
      this.employeeData = data;
      console.log(data)
    })

    this.restApi.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log(data)
    })

    this.restApi.getUnidades().subscribe((data) => {
      this.unidades = data;
      console.log(data)
    })
  }

  // Update employee data
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
        this.router.navigate(['/employees-list'])
      })
    }
  }

}