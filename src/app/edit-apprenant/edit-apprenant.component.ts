import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ApprenantI } from '../interfaces/apprenant-i';
import { FormationI } from '../interfaces/formation-i';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-apprenant',
  templateUrl: './edit-apprenant.component.html',
  styleUrl: './edit-apprenant.component.css'
})
export class EditApprenantComponent {

  public errMsg: string | null = null;
  public apprenant: ApprenantI = {} as ApprenantI;
  public apprenantId: string | null = null;

  public formations: FormationI[] = []


  constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((param) => {
        this.apprenantId = param.get('apprenantId')
      });

      if(this.apprenantId) {
        this.infoServ.getApprenantById(this.apprenantId).subscribe((data) => {
          this.apprenant = data
          console.log(this.apprenant)
          this.infoServ.getAllFormations().subscribe((formationData) => {
            this.formations = formationData
          })
        }, (err) => {
          this.errMsg = err
        })
      }
    }


    updateApprenant() {
      if(this.apprenantId){
        this.infoServ.majApprenant(this.apprenant, this.apprenantId).subscribe(() => {
          this.router.navigate(['/apprenants'])
        }, (err) => {
          this.errMsg = err
          this.router.navigate([`/apprenants/edit/${this.apprenantId}`]).then()
        })
      }
    }

}
