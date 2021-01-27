import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-unidad-list',
  templateUrl: './unidad-list.component.html',
  styleUrls: ['./unidad-list.component.css']
})
export class UnidadListComponent implements OnInit {

  Categorias: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getUnidades().subscribe((data: {}) => {
      this.Categorias = data;
    })
  }

  // Delete employee
  delete(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteUnidad(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }  


}
