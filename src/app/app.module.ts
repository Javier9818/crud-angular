import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { CategoriaCreateComponent } from './categoria-create/categoria-create.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { UnidadEditComponent } from './unidad-edit/unidad-edit.component';
import { UnidadCreateComponent } from './unidad-create/unidad-create.component';
import { UnidadListComponent } from './unidad-list/unidad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeesListComponent,
    CategoriaCreateComponent,
    CategoriaListComponent,
    CategoriaEditComponent,
    UnidadEditComponent,
    UnidadCreateComponent,
    UnidadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }