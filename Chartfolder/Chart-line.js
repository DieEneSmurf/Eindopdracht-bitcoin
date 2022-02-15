var xpLinechartID = document.getElementById("xp-chartjs-basic-line").getContext('2d');
var xpLineChart = new Chart(xpLinechartID, {
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', "7", "8"],
        datasets: [
            {
            label: 'Bitcoin Kosten',
            backgroundColor: ["#4c7cf3"],
            borderColor: ["#4c7cf3"],
            pointBorderColor: ["#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3","#4c7cf3"],
            pointBackgroundColor: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
            pointBorderWidth: 2,
            data: bitcoinPriceIndex,
            fill: false,
        }, 
      
        ]
        
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Gekochte bitcoins'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: false
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Koop moment'
                },
                gridLines: {
                    color: '#e1e4e9',
                    lineWidth: 1,
                    borderDash: [3]
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Kosten Bitcoin in €'
                },
                gridLines: {
                    color: '#e1e4e9',
                    lineWidth: 1,
                    borderDash: [3]
                }
            }]
        }
    }
});