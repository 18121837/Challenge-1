function functionAfstand() {
    var afstandChart = document.getElementById('afstand').getContext('2d');
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';
    var massPopChart = new Chart(afstandChart, {
        type: 'horizontalBar'
        , data: {
            labels: ['Raket']
            , datasets: [{
                label: 'Km'
                , data: [340]
                , backgroundColor: ['rgba(112, 174, 240, 0.35)']
                , borderColor: ['rgba(112, 174, 240, 0.90)']
                , borderWidth: [1]
        }]
        }
        , options: {
            title: {
                display: false
            }
            , scales: {
                xAxes: [{
                    display: true
                    , ticks: {
                        beginAtZero: true
                        , steps: 100
                        , stepValue: 5
                        , max: 400
                    }
        }]
            }
            , legend: {
                display: false
            , }
            , tooltips: {
                enabled: true
            }
        }
    });
}

function functionSpeed() {
    var speedChart = document.getElementById('snelheid').getContext('2d');
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';
    var massPopChart = new Chart(speedChart, {
        type: 'line'
        , data: {
            labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
            , datasets: [
                {
                    label: "Falcon 9"
                    , fillColor: '#fff'
                    , borderColor: 'RGBA(74,185,192,0.50)'
                    , backgroundColor: 'RGBA(74,185,192,0.20)'
                    , pointColor: 'rgba(74, 185, 192, 1)'
                    , pointStrokeColor: '#fff'
                    , pointHighlightFill: '#fff'
                    , pointHighlightStroke: 'rgba(74, 185, 192, 1)'
                    , data: [200, 230, 400, 420, 430, 500, 550, 570, 600, 800]
            }
        , ]
        }
    });
}

function functionGravity() {
    var gravityChart = document.getElementById('zwaartekracht').getContext('2d');
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';
    var massPopChart = new Chart(gravityChart, {
        type: 'polarArea'
        , data: {
            labels: ['Earth', 'Rocket', 'Mars']
            , datasets: [{
                label: 'Newton'
                , data: [
              8.905
            , 2.102
            , 4.866
          ]
                , backgroundColor: [
              'rgba(74, 190, 217, 0.61)'
            , 'rgba(72, 177, 137, 0.61'
            , 'rgba(215, 55, 157, 0.61)']
                , borderWidth: 1
        , }]
        }
        , options: {
            title: {
                display: true
                , text: 'Measurement in Newton'
            }
            , scales: {
                yAxes: [{
                    display: true
                    , ticks: {
                        beginAtZero: true
                    }
        }]
            }
            , legend: {
                display: false
                , position: 'right'
                , labels: {
                    fontColor: '#000'
                }
            }
            , tooltips: {
                enabled: true
            }
        }
    });
}

function functionWater() {
    var afstandChart = document.getElementById('water').getContext('2d');
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#fff';
    var massPopChart = new Chart(afstandChart, {
        type: 'bar'
        , data: {
            labels: ['Gallons']
            , datasets: [{
                label: 'Gallons'
                , data: [7]
                , backgroundColor: ['rgba(204, 182, 62, 0.35)']
                , borderColor: ['rgba(204, 182, 62, 0.90)']
                , borderWidth: ['1']
        , }]
        }
        , options: {
            title: {
                display: false
            }
            , scales: {
                yAxes: [{
                    barThickness: 6
                    , maxBarThickness: 8
                    , display: true
                    , ticks: {
                        beginAtZero: true
                        , steps: 100
                        , stepValue: 5
                        , max: 10
                    }
        }]
            }
            , legend: {
                display: false
            , }
            , tooltips: {
                enabled: true
            }
        }
    });
}

function start() {
    functionAfstand();
    functionSpeed();
    functionGravity();
    functionWater();
}
window.onload = start();