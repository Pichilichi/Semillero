import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { element } from 'protractor';
import { ModalProductosPage } from '../modal/modal-productos/modal-productos.page';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data: any;
  productos = {};
  img: string;

  constructor(private http: HttpClient, private authService: AuthService, public modalController: ModalController) {
    this.data = '';
    this.authService.getProductos(this.authService.token).then(data => {
      this.productos = data;
      this.data = this.productos;
    });
  }

  async ProductosModal($id){
    const modal = await this.modalController.create({
      component: ModalProductosPage,
      cssClass: 'my-modal-css',
      componentProps:{
        data: this.filtroProductos(this.data, $id),
        imagen: this.data.data[$id-1].img
      }
    });
    // console.log($id)
    // console.log(this.data.data[$id-1].img)
    return await modal.present();
  }
  
  filtroProductos(toSort: any, id){
    return toSort.data.filter((element) => element.id == id);
  }

  filtroImagen(id){
    this.img = this.data.data.filter((element) => {
      element.id == id;

      return element.img
    })
  }

  

}