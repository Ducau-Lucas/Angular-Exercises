import { Component } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ApprenantI } from '../interfaces/apprenant-i';
import { Router } from '@angular/router';
import { FormatWidth } from '@angular/common';
import { FormationI } from '../interfaces/formation-i';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrl: './add-apprenant.component.css'
})
export class AddApprenantComponent {

  public apprenant: ApprenantI = {} as ApprenantI;
  public errMsg: string | null = null;
  public formations: FormationI[] = []

  constructor(private infoServ: InfoService, private router: Router) {}

  create() {
    this.infoServ.createApprenant(this.apprenant).subscribe(() => {
      this.router.navigate(['/apprenants']).then()
    }, (err) => {
      this.errMsg = err;
      this.router.navigate(['/apprenants/add'])
    })
  }

  ngOnInit(): void {
    this.infoServ.getAllFormations().subscribe((data: FormationI[]) => {
      console.log(data);
      this.formations = data;
    }, (err) => {
      this.errMsg = err;
    })
  }
}
