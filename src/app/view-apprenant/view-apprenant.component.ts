import { Component } from '@angular/core';
import { ApprenantI } from '../interfaces/apprenant-i';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-apprenant',
  templateUrl: './view-apprenant.component.html',
  styleUrl: './view-apprenant.component.css'
})
export class ViewApprenantComponent {

  public apprenantId : string | null = null
  public apprenant: ApprenantI = {} as ApprenantI
  public errMsg : string | null = null

  constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.apprenantId = param.get("apprenantId")
      console.log(this.apprenantId);
    })

    if(this.apprenantId) {
      this.infoServ.getApprenantById(this.apprenantId).subscribe((id) => {
        this.apprenant = id
      }, (err) => {
        this.errMsg = err
      })
    }
  }
  public doesExist() {
    return Object.keys(this.apprenant).length > 0
  }
}

