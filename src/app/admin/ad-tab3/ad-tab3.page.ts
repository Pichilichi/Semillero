import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-ad-tab3',
  templateUrl: './ad-tab3.page.html',
  styleUrls: ['./ad-tab3.page.scss'],
})
export class AdTab3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Plataformas','Jugadores','Juegos','Abedules','Avellanos'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data: [40,35,46,2,89,60], label: 'Falta Calle'}
  ];
  
}
