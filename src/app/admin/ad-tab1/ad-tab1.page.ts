import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-tab1',
  templateUrl: './ad-tab1.page.html',
  styleUrls: ['./ad-tab1.page.scss'],
})
export class AdTab1Page implements OnInit {

  data = {};
  token: any;
  users = {};

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.getUsers(this.authService.token).then(data => {
      this.users = data;
    });
   }

  activarUsuario($id){
    this.data = $id;
    this.authService.activarUsuario(this.authService.token,this.data);
  }
    
  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.authService.getUsers(this.authService.token).then(data => {
      this.users = data;
    })

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
