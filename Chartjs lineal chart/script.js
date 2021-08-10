var timeFormat = "MM/DD/YYYY HH:mm";
var now = window.moment();
var dragOptions = {
    animationDuration: 1000,
};

function randomScalingFactor() {
    return Math.round(Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1));
}

function randomColorFactor() {
    return Math.round(Math.random() * 255);
}

function randomColor(opacity) {
    return (
        "rgba(" +
        randomColorFactor() +
        "," +
        randomColorFactor() +
        "," +
        randomColorFactor() +
        "," +
        (opacity || ".3") +
        ")"
    );
}

function newDate(days) {
    return now.clone().add(days, "d").toDate();
}

function newDateString(days) {
    return now.clone().add(days, "d").format(timeFormat);
}

var config = {
    type: "line",
    data: {
        labels: [
            newDate(0),
            newDate(1),
            newDate(2),
            newDate(3),
            newDate(4),
            newDate(5),
            newDate(6),
        ], // Date Objects
        datasets: [
            {
                label: "My First dataset",
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                fill: false,
                borderDash: [5, 5],
            },
        ],
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "Chart.js Time Scale",
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        parser: timeFormat,
                        round: "day",
                        tooltipFormat: "ll HH:mm",
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Date",
                    },
                    ticks: {
                        maxRotation: 0,
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "value",
                    },
                },
            ],
        },
        plugins: {
            zoom: {
                zoom: {
                    enabled: true,
                    drag: dragOptions,
                    mode: "x",
                    speed: 0.05,
                },
            },
        },
    },
};

config.data.datasets.forEach(function (dataset) {
    dataset.borderColor = randomColor(0.4);
    dataset.backgroundColor = randomColor(0.5);
    dataset.pointBorderColor = randomColor(0.7);
    dataset.pointBackgroundColor = randomColor(0.5);
    dataset.pointBorderWidth = 1;
});

window.resetZoom = function () {
    window.myLine.resetZoom();
};

window.toggleDragMode = function () {
    var chart = window.myLine;
    var zoomOptions = chart.options.plugins.zoom.zoom;
    zoomOptions.drag = zoomOptions.drag ? false : dragOptions;

    chart.update();
    document.getElementById("drag-switch").innerText = zoomOptions.drag
        ? "Disable drag mode"
        : "Enable drag mode";
};

window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new window.Chart(ctx, config);
};
