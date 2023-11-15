import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionApprenantComponent } from './gestion-apprenant/gestion-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { FooterComponent } from './footer/footer.component';
import { ViewApprenantComponent } from './view-apprenant/view-apprenant.component';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewFormationComponent } from './view-formation/view-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GestionApprenantComponent,
    AddApprenantComponent,
    EditApprenantComponent,
    NavbarComponent,
    Page404Component,
    FooterComponent,
    ViewApprenantComponent,
    GestionFormationComponent,
    ViewFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
