import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data = {};
  token: any;
  users: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.data).then( data => {
      this.token = data;
      console.log(this.token);
      this.router.navigate(['/tabs']);
      }); 
    
  }
}
