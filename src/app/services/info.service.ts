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

  //Create Apprenant
  createApprenant(apprenant: ApprenantI) {
    const createApprenantURL : string = `${this.serverURL}/apprenants`;
    return this.httpClient.post<ApprenantI>(createApprenantURL, apprenant).pipe(catchError(this.ErrorHandlingFunc))
  }

  suppressionApprenant(apprenantId: string | number) {
    const deleteApprenantURL : string = `${this.serverURL}/apprenants/${apprenantId}`;
    return this.httpClient.delete<ApprenantI>(deleteApprenantURL).pipe(catchError(this.ErrorHandlingFunc))
  }

  // Update Apprenant
  majApprenant(apprenant: ApprenantI, apprenantId: string | number) {
    const updateApprenantURL: string = `${this.serverURL}/apprenants/${apprenantId}`;
    return this.httpClient.put<ApprenantI>(updateApprenantURL, apprenant).pipe(catchError(this.ErrorHandlingFunc))
  }

  // Get Formation
  getAllFormations() {
    const formationURL : string = `${this.serverURL}/formations`
    return this.httpClient.get<FormationI[]>(formationURL).pipe(catchError(this.ErrorHandlingFunc))
  }
  // Get Formation By Id
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
