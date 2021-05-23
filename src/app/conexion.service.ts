import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { retry,catchError} from 'rxjs/operators';
//import { fromEventPattern } from 'rxjs';
import { Item1 } from '../app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

url = 'http://localhost:5000/items'; // direccion api rest del node

constructor(private httpClient: HttpClient) { }

//headers
httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })

}
// Obtem todos os items
  getItems(): Observable<Item1[]> {
    return this.httpClient.get<Item1[]>(this.url)
    
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtner un itiem por la  id
  getItemById(id: number): Observable<Item1> {
    return this.httpClient.get<Item1>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva un item
  saveItem(item: Item1): Observable<Item1> {
    return this.httpClient.post<Item1>(this.url, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // actuliza un item
  updateItem(item: Item1): Observable<Item1> {
    return this.httpClient.put<Item1>(this.url + '/' + item.id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Borra un item
  deleteItem(item: Item1) {
    return this.httpClient.delete<Item1>(this.url + '/' + item.id,  this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulacion de errores
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error ocurre del lado dle cliente
      errorMessage = error.error.message;
    } else {
      // Error ocurre del lado dle servidor
      errorMessage = `Código de error: ${error.status}, ` + `mensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


  
}