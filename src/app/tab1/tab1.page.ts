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
  id: number;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data
      this.data = this.filtroEnorme(data)
      //console.log(this.data)
    });
  } 

  change(){
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data
      this.data = this.filtroPlaga(data, this.id)
    });
  }

  filtroPlaga(toSort: any, id){
    if(id == 11){
      return toSort.data.filter((element) => element.id < 100)
    }
    else{
    return toSort.data.filter((element) => element.plague_id == id)
    }
  }

  filtroEnorme(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }

}
