import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  public LineChart: any;
  public barChart: any;

  createLineChart() {
    this.LineChart = new Chart('LineChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Current Week $58,211',
            data: ['467', '232', '123', '339', '442', '274'],
            backgroundColor: 'blue',
          },
          {
            label: 'Previous Week $68,768',
            data: ['542', '542', '236', '327', '17', '0.00'],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2,
        plugins: {
          legend:{
            labels:{
              boxWidth:3,
              boxHeight:3,
              borderRadius:3,
              color:'#1c1c1c'
              
            },
            fullSize:false,
          

          },
          title: {
              display: true,
              text: 'Revenue',
              font:{
                size:20,
              },
              position:'top',
              align:'start',
              color:'#1c1c1c',
              fullSize:false
          }
          
      }
       
      }
    });
  }
  createbarChart() {
    this.LineChart = new Chart('barChart', {
      type: 'bar', 

      data: {
        // values on X-Axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
           label: 'on',
            data: ['467', '576', '572', '339', '442', '574'],
            backgroundColor: '#a8c5da',
       
          },
        ],
      },
      options: {
    
        aspectRatio: 1.5,
        responsive:true,
        
        plugins: {
          legend :{
            display:false,
          },
          title: {
              display: true,
              text: 'Custom  Title',
              font:{
                size:20,
              },
              position:'top',
              align:'start',
              color:'#1c1c1c',
              fullSize:false,
          }
          
      }
       
      },
    });
  }
  ngOnInit() {
    this.createbarChart();
    this.createLineChart();
  }
}
