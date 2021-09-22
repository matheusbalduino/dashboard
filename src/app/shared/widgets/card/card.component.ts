import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string ='';
  @Input() total: string ='';
  @Input() percentage: string='';

  constructor() { }
  Highcharts = Highcharts;
  chartOptions: any;

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip:{
        split: true,
        outside: true
      },
      credits:{
        enabled:false
      },
      exporting: {
        enabled:false
      },
      yAxis:{
        labels: {
          enabled: false,
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      xAxis:{
        labels: {
          enabled: false,
        },
        title:{
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data:[71,78,39,66]
       }]
  }
    setTimeout(()=>{
      window.dispatchEvent(
      new Event('resize')
      );
    }, 300)

  Exporting(this.Highcharts);

  }

}
