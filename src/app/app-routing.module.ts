import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionApprenantComponent } from './gestion-apprenant/gestion-apprenant.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { EditApprenantComponent } from './edit-apprenant/edit-apprenant.component';
import { ViewApprenantComponent } from './view-apprenant/view-apprenant.component';
import { Page404Component } from './page404/page404.component';
import { GestionFormationComponent } from './gestion-formation/gestion-formation.component';
import { ViewFormationComponent } from './view-formation/view-formation.component';

const routes: Routes = [
  {
  path: "", pathMatch: "full", component: AccueilComponent
  },
  {
    path: "apprenants", component: GestionApprenantComponent
  },
  {
    path: "apprenants/add", component: AddApprenantComponent
  },
  {
    path: "apprenants/edit/:apprenantId", component: EditApprenantComponent 
  },
  {
    path: "apprenants/view/:apprenantId", component: ViewApprenantComponent
  },
  {
    path: "formation", component: GestionFormationComponent
  },
  {
    path: "formation/view/:formationId", component: ViewFormationComponent
  },
  {
    path: "**", component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
