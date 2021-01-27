import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  categoriaData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getCategoria(this.id).subscribe((data) => {
      this.categoriaData = data;
    })
  }

  // Update employee data
  update() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateCategoria(this.id, this.categoriaData).subscribe(data => {
        this.router.navigate(['/categorias-list'])
      })
    }
  }

}
