var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 190, 33, 57, 23, 39],
          showLine: false,
        }, {
            label: 'More data',
            data: [2, 19, 30, 5, 25, 30],
          backgroundColor: 'red',
          borderColor: 'red',
          pointRadius: 0,
        }]
    },
    options: {
      scales: {
        x: {

        },
        y: {

        }
      },
      plugins: {
        zoom: {
              zoom: {
                drag: {
                  enabled: true,
                },
                mode: 'x',
              },
            },
      }
    }
});