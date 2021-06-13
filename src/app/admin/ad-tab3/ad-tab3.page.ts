import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-ad-tab3',
  templateUrl: './ad-tab3.page.html',
  styleUrls: ['./ad-tab3.page.scss'],
})
export class AdTab3Page implements OnInit {

  data: any;
  opiniones = {};
  PlagasNombres = [];
  OpinionesPlagas = [];
  plagas = [];

  ctx = document.getElementById("myChart")
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  barChartLabels: Label[] = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];


  barChartData: ChartDataSets[];

  constructor(private http: HttpClient, private authService: AuthService) {
    this.data = '';
    this.authService.getOpiniones(this.authService.token).then(data =>{
      this.opiniones = data;
      this.data = this.filtroOpiniones(data)
      //console.log(this.data)
      //console.log(this.data[0].plague_name)
      for(let i = 0; i < this.data.length; i++){
        this.OpinionesPlagas[i] = this.data[i].plague_name;
      }
      //console.log(this.OpinionesPlagas);
    });
    this.authService.getPlagas(this.authService.token).then(data => {
      this.plagas = this.filtroTodasPlagas(data);
      //console.log(this.plagas)
      for(let i = 0; i < this.plagas.length; i++){
        this.PlagasNombres[i] = this.plagas[i].name;
      }
      console.log(this.PlagasNombres[6]);

      
    });

    this.barChartData = [
      {data: [0,1,2,3,4,5], label: 'Dwight'},
    ];

    // this.barChartData = [
    //   {data: [0,0,0,0,0,0], label: 'Dwight'},
    //   {data: [1,1,1,1,1,1], label: 'Kacey'},
    //   {data: [2,2,2,2,2,2], label: 'Insectos'},
    //   {data: [3,3,3,3,3,3], label: 'Kirk'},
    //   {data: [4,4,4,4,4,4], label: "Anais"},
    //   {data: [5,5,5,5,5,5], label: "Deshaun"},
    //   {data: [6,6,6,6,6,6], label: "Enos"},
    //   {data: [7,7,7,7,7,7], label: 'Breana'},
    //   {data: [8,8,8,8,8,8], label: "Boyle"},
    //   {data: [9,9,9,9,9,9], label: this.PlagasNombres[9]},
    // ];
    
  
  
   }

  ngOnInit() {
  }

 
  filtroOpiniones(toSort: any){
    return toSort.data.filter((element) => element.id < 100)
  }

  filtroTodasPlagas(toSort: any){
    return toSort.data.filter((element) => element.id < 100);
  }

  // getNombre(i: number){
  //   // console.log(this.PlagasNombres)
  //    console.log(this.PlagasNombres[1])
  //   return this.PlagasNombres[i];
  // }
  
  cambio(id){
    this.removeData;
    const labelsNew = [
      this.PlagasNombres[id]
    ]
    const datos = [
      2
    ]
    this.addData(Chart,datos,labelsNew);
  }

  
  dataNew={}
  removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

  addData(chart, data, id) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
}
