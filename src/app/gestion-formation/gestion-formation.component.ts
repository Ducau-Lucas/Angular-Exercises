import { Component } from '@angular/core';
import { FormationI } from '../interfaces/formation-i';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrl: './gestion-formation.component.css'
})
export class GestionFormationComponent {
  public formations: FormationI[] = []
  public errMsg: string | null = null

  constructor(public infoServ: InfoService){}

  ngOnInit() {
    this.getFormations()
  }

  getFormations() {
    this.infoServ.getAllFormations().subscribe((data: FormationI[]) => {
      console.log(data);
      this.formations = data;
    }, (err) => {
      this.errMsg = err;
      
    })
  }
  
}
