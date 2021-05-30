import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ad-tab2',
  templateUrl: './ad-tab2.page.html',
  styleUrls: ['./ad-tab2.page.scss'],
})
export class AdTab2Page implements OnInit {

  data: any;
  opiniones = {};
  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data;
      this.data = this.filtroOpiniones(data)
    });
   }

  ngOnInit() {
  }

  filtroOpiniones(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }
}
