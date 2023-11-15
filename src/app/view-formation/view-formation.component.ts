import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';
import { FormationI } from '../interfaces/formation-i';

@Component({
  selector: 'app-view-formation',
  templateUrl: './view-formation.component.html',
  styleUrl: './view-formation.component.css'
})
export class ViewFormationComponent {

  public formationtId : string | null = null
  public formation: FormationI = {} as FormationI
  public errMsg : string | null = null

  constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute){}



  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.formationtId = param.get("formationId")
      console.log(this.formationtId);
    })

    if(this.formationtId) {
      this.infoServ.getFormationById(this.formationtId).subscribe((id) => {
        this.formation = id
      }, (err) => {
        this.errMsg = err
      })
    }
  }
  public doesExist() {
    return Object.keys(this.formation).length > 0
  }
}

