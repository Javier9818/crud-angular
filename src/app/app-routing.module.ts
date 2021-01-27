import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { UnidadCreateComponent } from './unidad-create/unidad-create.component';
import { UnidadEditComponent } from './unidad-edit/unidad-edit.component';
import { UnidadListComponent } from './unidad-list/unidad-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  
  { path: 'create-categoria', component: CategoriaCreateComponent },
  { path: 'categorias-list', component: CategoriaListComponent },
  { path: 'categoria-edit/:id', component: CategoriaEditComponent },

  { path: 'create-unidad', component: UnidadCreateComponent },
  { path: 'unidades-list', component: UnidadListComponent },
  { path: 'unidad-edit/:id', component: UnidadEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }