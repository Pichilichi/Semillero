import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any; 
  plagas = {};

  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getPlagas(this.authService.token).then(data => {
      this.plagas = data
      this.data = this.plagas
    });
  }

}
