import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'plagas'
})
export class PlagasPipe implements PipeTransform {

  data: any;
  plagas = {};

  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getPlagas(this.authService.token).then( data => {
      this.plagas = this.filtroTodasPlagas(data);
      //console.log(this.plagas)
    });
  }

  transform(plagas: any, texto:string): any {
    if( texto.length === 0) { return plagas ;}

   texto = texto.toLocaleLowerCase();

    return plagas.filter( plaga => {
      return plaga.name.toLocaleLowerCase().includes(texto)
    })
  }

  filtroTodasPlagas(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }

}

