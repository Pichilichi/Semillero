import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any;
  opiniones = {};
  plagas: any;
  id: number;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data
      this.data = this.filtroOpiniones(data)
      //console.log(this.data)
    });
    this.authService.getPlagas(this.authService.token).then(data => {
      this.plagas = this.filtroTodasPlagas(data)
      //console.log(this.plagas);
    });
  } 

  change(){
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data
      this.data = this.filtroIdPlaga(data, this.id)
    });
  }

  filtroTodasPlagas(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }

  filtroIdPlaga(toSort: any, id){
    if(id == 11){
      return toSort.data.filter((element) => element.id < 100)
    }
    else{
    return toSort.data.filter((element) => element.plague_id == id)
    }
  }

  filtroOpiniones(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }

  loadData(event){
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if(this.data.length == 1000){
        event.target.disabled = true;
      }
    }, 200);
  }

  darLike($idOpinion){ 
    this.data = $idOpinion;
    //console.log(this.data);
    //console.log(this.authService.token)
    this.authService.hacerLike(this.authService.token,this.data);
    
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data
      this.data = this.filtroOpiniones(data)
      //console.log(this.data)
    });
  }
}
