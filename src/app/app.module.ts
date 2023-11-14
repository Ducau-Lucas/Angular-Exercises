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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GestionApprenantComponent,
    AddApprenantComponent,
    EditApprenantComponent,
    NavbarComponent,
    Page404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
