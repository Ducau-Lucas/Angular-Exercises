import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApprenantI } from '../interfaces/apprenant-i';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  private serverURL : string = "http://localhost:3004"

  getAllApprenants() {
    const apprenantURL : string = `${this.serverURL}/apprenants` 
    return this.httpClient.get<ApprenantI[]>(apprenantURL).pipe(catchError(this.ErrorHandlingFunc))
  }
  
  public ErrorHandlingFunc(err: HttpErrorResponse) {
    let errorMessage : string = ""
    if(err.error instanceof ErrorEvent){
      errorMessage= `Error: ${err.error.message}`
    }else {
      errorMessage = `Status : ${err.status} : ${err.message}`
    }
    return throwError(() => errorMessage )
    
  }
}
