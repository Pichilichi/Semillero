import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ad-tab2',
  templateUrl: './ad-tab2.page.html',
  styleUrls: ['./ad-tab2.page.scss'],
})
export class AdTab2Page implements OnInit {

  data: any;
  opiniones = {};
  resultadoOpiniones = [];
  pdfObj = null;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getOpiniones(this.authService.token).then(data => {
      this.opiniones = data;
      this.data = this.filtroOpiniones(data);
      this.opinionesFiltradas(this.opiniones);
    });
   }

  ngOnInit() {
  }

  opinionesFiltradas(datos: any){
    for(let i = 0; i < datos.data.length; i++){
      // console.log(datos.data[i].headline + " " + datos.data[i].id + 
      // " " + datos.data[i].description +
      // " " + datos.data[i].plague_name);

      this.resultadoOpiniones[i] = "Titular: " + datos.data[i].headline + 
      " | Id: " + datos.data[i].id + 
      " | Descripción: " + datos.data[i].description +
      " | Nombre de la plaga: " + datos.data[i].plague_name + " \n" + " \n"

      // console.log(this.resultadoOpiniones)
    }
  }

  OpinionesPDF(){
    var docDefinition = {
      content:[
        { text: 'Opiniones', style: 'header', alignment: 'center'},
        { text: this.resultadoOpiniones, style: 'story', margin: [0, 20, 0, 20] },
      ],
      styles: {
        story: {
          italic: true,
          alignment: 'left',
          width: '50%',
        },
        header: {
          fontSize: 18,
          bold: true,
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.pdfObj.download();
  }

  filtroOpiniones(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }
}
