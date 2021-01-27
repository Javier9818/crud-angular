import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  @Input() categoriaDetails = {descripcion: ''}
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { 
  }

  addCategoria(dataEmployee) {
    this.restApi.createCategoria(this.categoriaDetails).subscribe((data: {}) => {
      this.router.navigate(['/categorias-list'])
    })
  }

}
