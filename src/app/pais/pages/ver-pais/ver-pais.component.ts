import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((resp) => {
        this.pais = resp[0];
        console.log(resp);
      });
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.getPaisPorAlpha(id).subscribe((res) => {
    //     console.log(res);
    //   });
    // });
  }
}
