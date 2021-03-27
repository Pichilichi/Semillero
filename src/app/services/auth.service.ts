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
}
