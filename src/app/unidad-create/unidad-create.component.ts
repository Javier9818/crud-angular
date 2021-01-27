import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";


@Component({
  selector: 'app-unidad-create',
  templateUrl: './unidad-create.component.html',
  styleUrls: ['./unidad-create.component.css']
})
export class UnidadCreateComponent implements OnInit {

  @Input() categoriaDetails = {descripcion: ''}
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { 
  }

  addCategoria(dataEmployee) {
    this.restApi.createUnidad(this.categoriaDetails).subscribe((data: {}) => {
      this.router.navigate(['/unidades-list'])
    })
  }

}
