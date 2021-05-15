import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-productos',
  templateUrl: './modal-productos.page.html',
  styleUrls: ['./modal-productos.page.scss'],
})
export class ModalProductosPage implements OnInit {
  @Input() data: any;
  @Input() imagen: string;

  constructor(private modalCtrl: ModalController) {}

  async cerrar(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }
}
