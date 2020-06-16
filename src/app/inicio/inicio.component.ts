import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.styl']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateExampleChart();
  }
  
  generateExampleChart(): void {
    const options = {
      maintainAspectRatio: false,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      },
      plugins: {
        filler: {
          propagate: false
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
            maxRotation: 0
          }
        }]
      }
    };
    new Chart('example-chart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          //backgroundColor: 'rgba(245, 66, 126, 0.45)',
          //borderColor: '#f5427e',
          backgroundColor: 'rgba(219, 33, 33, 0.45)',
          borderColor: '#db2121',
          data: [10, 5, 15, 10, 20, 12],
          label: 'Dado',
          fill: 'start'
        }]
      },
      options: Chart.helpers.merge(options, {
        title: {
          text: 'Exemplo',
          display: false
        },
        legend: {
          display: false
        }
      })
    });
  }

}
