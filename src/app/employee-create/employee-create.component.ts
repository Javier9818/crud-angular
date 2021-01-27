import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { precio: '', cantidad: '', idUnidad: -1, idCategoria: -1 , descripcion: ''}
  categorias: any = [];
  unidades: any = [];
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { 
    this.restApi.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log(data)
    })

    this.restApi.getUnidades().subscribe((data) => {
      this.unidades = data;
      console.log(data)
    })
  }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }

}