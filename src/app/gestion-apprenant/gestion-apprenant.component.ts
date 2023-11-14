import { Component } from '@angular/core';
import { ApprenantI } from '../interfaces/apprenant-i';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-gestion-apprenant',
  templateUrl: './gestion-apprenant.component.html',
  styleUrl: './gestion-apprenant.component.css'
})
export class GestionApprenantComponent {

  public apprenants: ApprenantI[] = []
  public errMsg: string | null = null

  constructor(public infoServ: InfoService){}

  ngOnInit() {
    this.getApprenants()
  }

  getApprenants() {
    this.infoServ.getAllApprenants().subscribe((data: ApprenantI[]) => {
      console.log(data);
      this.apprenants = data;
    }, (err) => {
      this.errMsg = err;
      
    })
  }
  
}
