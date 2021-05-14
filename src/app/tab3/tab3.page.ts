import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data: any;
  productos = {};

  constructor(private http: HttpClient, private authService: AuthService, public modalController: ModalController) {
    this.data = '';
    this.authService.getProductos(this.authService.token).then(data => {
      this.productos = data;
      this.data = this.productos;
    });
  }

  // async ProductosModal(){
  //   const modal = await this.modalController.create({
      
  //   });
  // }
  

}
