import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://semillero.allsites.es/public/api';
  token: any;
  constructor(private http: HttpClient, private navCtrl: NavController) { }

  register(data: any){
    return new Promise( resolve => {
      this.http.post(this.apiUrl + '/register',
      {
      name: data.name,
      email: data.email,
      password: data.password,
      surname: data.surname,
      })
      .subscribe(data => {
      this.token = data;
      resolve(data);
      }, err =>{
      console.log(err);
      });
      });
  }

  login(data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/login',
      {
      email: data.email,
      password: data.pwd
      })
      .subscribe(data => {
      this.token = data;
      resolve(data);
      }, err => {
      console.log(err);
      });
      });
  }

  getOpiniones(tok: any){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/opinions',{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.data.token)
      })
      .subscribe(data => {
        resolve(data);
      }, err =>{
        console.log(err);
      });
    });
  }

  getUsers(tok:any){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.data.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
      });
  }

  getPlagas(tok: any){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/plagues',)
      .subscribe(data =>{
        resolve(data);
      }, err=> {
        console.log(err);
      });
    });
  }

  hacerLike(tok: any, data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/like', 
      {
        user_id: tok.data.id,
        opinion_id: data,
      },{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.data.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  activarUsuario(tok: any, data: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/activate',
      {
        user_id: data,
      },{
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + tok.data.token),
      })
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
