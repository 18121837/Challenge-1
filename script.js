function functionAfstand() {
    
    //Dit is de code voor de afstand
    var afstandChart = document.getElementById('afstand').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(afstandChart, {
      type:'horizontalBar',
      data:{
        labels:['Raket'],
        datasets:[{
          label:'Km',
          data:[
            340//dit is de huidige afstand van de shuttle.
          ],
          backgroundColor:[
            '#70adf0'
          ]
        }]
      },
      options:{
        title:{
          display:false
        },
        scales:{
          xAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 100,
                stepValue: 5,
                max: 400
            }
        }]
        },
        legend:{
          display:false,
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
    
}

function functionSpeed(){

    
    var speedChart = document.getElementById('snelheid').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(speedChart, {
      type:'line',
      data:{
        labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        datasets: [
            {
                label: "Falcon 9",
                fillColor: '#fff',
                borderColor: 'RGBA(74,185,192,0.50)',
                backgroundColor: 'RGBA(74,185,192,0.20)',
                pointColor: 'rgba(74, 185, 192, 1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(74, 185, 192, 1)',
                data: [200, 230, 400, 420, 430, 500, 550, 570, 600, 800]
            },
        ]
      }
    });
    
}

function functionGravity(){
    
    var gravityChart = document.getElementById('zwaartekracht').getContext('2d');

    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';

    var massPopChart = new Chart(gravityChart, {
      type:'polarArea',
      data:{
        labels:['Aarde', 'Shuttle', 'Mars'],
        datasets:[{
          label:'Newton',
          data:[
            9.807,
            1.201, 
            3.711
          ],
          backgroundColor:[
            '#2980b9',
            '#27ae60',
            '#c0392b' ],
            borderWidth: 0,
        }]
      },
      options:{
        title:{
          display:true,
          text:'Measurement in Newton'
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }]
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
    
}

function start(){
    functionAfstand();
    functionSpeed();
    functionGravity();
}

window.onload = start(); 

