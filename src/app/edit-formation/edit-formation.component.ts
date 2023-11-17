import { Component } from '@angular/core';
import { FormationI } from '../interfaces/formation-i';
import { InfoService } from '../services/info.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrl: './edit-formation.component.css'
})
export class EditFormationComponent {

  public errMsg: string | null = null;
  public formation: FormationI = {} as FormationI;
  public formationId: string | null = null;

  constructor(private infoServ: InfoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.formationId = param.get('formationId')
    });

    if(this.formationId) {
      this.infoServ.getFormationById(this.formationId).subscribe((data) => {
        this.formation = data
        console.log(this.formation)
      }, (err) => {
        this.errMsg = err
      })
    }
  }


  updateFormation() {
    if(this.formationId) {
      this.infoServ.majFormation(this.formation, this.formationId).subscribe(() => {
        this.router.navigate(['/formation'])
      }, (err) => {
        this.errMsg = err
        this.router.navigate([`/formation/edit/${this.formationId}`]).then()
      })
    }
  }

}
