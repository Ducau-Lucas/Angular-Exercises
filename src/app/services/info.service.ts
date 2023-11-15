import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApprenantI } from '../interfaces/apprenant-i';
import { Observable, catchError, throwError } from 'rxjs';
import { FormationI } from '../interfaces/formation-i';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  private serverURL : string = "http://localhost:3004"

  // Get all Apprenant
  getAllApprenants() {
    const apprenantURL : string = `${this.serverURL}/apprenants` 
    return this.httpClient.get<ApprenantI[]>(apprenantURL).pipe(catchError(this.ErrorHandlingFunc))
  }

  //Get apprenantById
  getApprenantById(apprenantId: string) :Observable<ApprenantI> {
    const apprenantIdURL : string = `${this.serverURL}/apprenants/${apprenantId}`
    return this.httpClient.get<ApprenantI>(apprenantIdURL).pipe(catchError(this.ErrorHandlingFunc))
  }



  getAllFormations() {
    const formationURL : string = `${this.serverURL}/formations`
    return this.httpClient.get<FormationI[]>(formationURL).pipe(catchError(this.ErrorHandlingFunc))
  }

  getFormationById(formationId : string) :Observable<FormationI> {
    const formationIdUrl : string = `${this.serverURL}/formations/${formationId}`
    return this.httpClient.get<FormationI>(formationIdUrl).pipe(catchError(this.ErrorHandlingFunc))
  }

  getFormationApprenant(apprenant: ApprenantI) {
    const formationApprenantURL: string = `${this.serverURL}/formations/${apprenant.formationId}`;
    return this.httpClient.get<FormationI>(formationApprenantURL).pipe(catchError(this.ErrorHandlingFunc))
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
