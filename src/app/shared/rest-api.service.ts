import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/productos')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCategorias(){
    return this.http.get(this.apiURL + '/categorias')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUnidades(){
    return this.http.get(this.apiURL + '/unidades')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/productos/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/productos', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL + '/productos/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    return this.http.delete<Employee>(this.apiURL + '/productos/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }



    // HttpClient API get() method => Fetch employee
    getCategoria(id){
      return this.http.get(this.apiURL + '/categorias/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }  
  
    // HttpClient API post() method => Create employee
    createCategoria(employee){
      return this.http.post(this.apiURL + '/categorias', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }  
  
    // HttpClient API put() method => Update employee
    updateCategoria(id, employee){
      return this.http.put(this.apiURL + '/categorias/' + id, JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  
    // HttpClient API delete() method => Delete employee
    deleteCategoria(id){
      return this.http.delete(this.apiURL + '/categorias/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

    // HttpClient API get() method => Fetch employee
    getUnidad(id){
      return this.http.get(this.apiURL + '/unidades/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }  
  
    // HttpClient API post() method => Create employee
    createUnidad(employee){
      return this.http.post(this.apiURL + '/unidades', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }  
  
    // HttpClient API put() method => Update employee
    updateUnidad(id, employee){
      return this.http.put(this.apiURL + '/unidades/' + id, JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  
    // HttpClient API delete() method => Delete employee
    deleteUnidad(id){
      return this.http.delete(this.apiURL + '/unidades/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }


  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}