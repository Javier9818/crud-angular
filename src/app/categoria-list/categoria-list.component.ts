import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  Categorias: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getCategorias().subscribe((data: {}) => {
      this.Categorias = data;
    })
  }

  // Delete employee
  delete(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteCategoria(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }  

}
