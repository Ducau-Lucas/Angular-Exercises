import { Component } from '@angular/core';
import { ApprenantI } from '../interfaces/apprenant-i';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';
import { FormationI } from '../interfaces/formation-i';

@Component({
  selector: 'app-view-apprenant',
  templateUrl: './view-apprenant.component.html',
  styleUrl: './view-apprenant.component.css'
})
export class ViewApprenantComponent {

  public apprenantId : string | null = null
  public apprenant: ApprenantI = {} as ApprenantI
  public errMsg : string | null = null

  public formation: FormationI = {} as FormationI

  constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.apprenantId = param.get("apprenantId")
      console.log(this.apprenantId);
    })

    if(this.apprenantId) {
      this.infoServ.getApprenantById(this.apprenantId).subscribe((id) => {
        this.apprenant = id

        // Get formation Details
        this.infoServ.getFormationApprenant(id).subscribe((id) => {
          this.formation = id
        })
      }, (err) => {
        this.errMsg = err
      })
    }
  }
  public doesExist() {
    return Object.keys(this.apprenant).length > 0
  }
}

