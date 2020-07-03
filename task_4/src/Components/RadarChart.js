import React, { Component } from 'react';
import Chart from 'chart.js';

class RadarChart extends Component{
    canvas = React.createRef();

    names = ['Bob', 'Kevin', 'Stuart', 'Dave', 'Jerry', 'Mark', 'Phil', 'Carl'];
    minBananas = 0;
    avgBananas = 8;
    maxBananas = 13;

    //TODO: mb create 'helper' file for logic in this file
    getRandomValue = (min,max) => {
        return Math.round(Math.random() * (max - min) + min);
    };

    getRandomData = (min,max) => {
        const { getRandomValue, names } = this;
        let result = [];
        for (let index = 0; index <= names.length; index++) {
            result.push(getRandomValue(min,max));  
        }
        return result;
    }
  
    componentDidMount(){
      console.log('[RadarChart] -> Mounting Action:', this.canvas.current );

      var canvasContex =  this.canvas.current.getContext('2d');

      const { getRandomData, names } = this;
      const { minBananas, avgBananas, maxBananas} = this;
      
      this.chart = new Chart( canvasContex , {
        type: 'radar',
        data: {
            labels: names,
            datasets: [{
                label: 'eats minimum',
                backgroundColor: '#3399FF',
                borderColor: '#0A75BC',
                pointBackgroundColor: '#9BCEFF',
                data: getRandomData(minBananas, avgBananas)
            },{
                label: 'eats maximum',
                backgroundColor: '#FFFFA5',
				borderColor: '#FCE029',
				pointBackgroundColor: '#FFFFE1',
                data: getRandomData(avgBananas, maxBananas)
            }]
        },
        options: {}
      });
  
      console.log('[RadarChart] -> Mounting Action End:', this.chart );
    }
  
    randomizeData = () => {
      console.log('[RadarChart] -> Randomize data action');

      const { getRandomData } = this;
      const { minBananas, avgBananas, maxBananas} = this;

      this.chart.data.datasets[0].data = getRandomData(minBananas, avgBananas);
      this.chart.data.datasets[1].data = getRandomData(avgBananas, maxBananas);

      this.chart.update();
      
    }
  
    render(){
        return(
            <>
                <h1> Banana statistics </h1>
                <canvas ref={ this.canvas }></canvas>
                <button onClick={this.randomizeData}> Randomize Data </button>
            </>
         )
    }
  }
  
export default RadarChart;