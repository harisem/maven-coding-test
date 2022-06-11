let chartjson = {
    'data': [],
    'max': 100,
    'prefix': '%'
}

var btnSubmit = document.getElementById('submitBtn')
btnSubmit.addEventListener('click', getData)

function getData() {
    var btnStop = document.getElementById('stopBtn')
    btnStop.style.display = ''
    btnSubmit.style.display = 'none'
    btnStop.addEventListener('click', stop)

    let input = document.getElementById('inputNumber').value

    start()
    const interval = setInterval(() => {
        start()
        console.log(chartjson.data)
    }, 3000)

    function stop() {
        clearInterval(interval);
        btnStop.style.display = 'none'
        btnSubmit.style.display = ''
    }

    function start() {
        chartjson.data = [];
        for (let i = 0; i < input; i++) {
            chartjson.data.push({ "score": Math.floor(Math.random() * chartjson.max) });
        }

        let colors = ['twenty-five', 'fifty', 'seventy-five', 'hundred'];

        findColor = (n) => {
            var color = colors.find(function (el) {
                return el === n;
            });
            return color;
        };

        var TROW = 'tr',
            TDATA = 'td';

        var chart = document.createElement('div');
        var barchart = document.createElement('table');
        var titlerow = document.createElement(TROW);
        barchart.appendChild(titlerow);
        chart.appendChild(barchart);

        var barrow = document.createElement(TROW);

        for (var i = 0; i < chartjson.data.length; i++) {
            barrow.setAttribute('class', 'bars');
            var prefix = chartjson.prefix || '';

            var bardata = document.createElement(TDATA);
            var bar = document.createElement('div');

            switch (true) {
                case chartjson.data[i].score >= 0 && chartjson.data[i].score <= 25:
                    bar.setAttribute('class', findColor('twenty-five'))
                    break;

                case chartjson.data[i].score >= 26 && chartjson.data[i].score <= 50:
                    bar.setAttribute('class', findColor('fifty'))
                    break;

                case chartjson.data[i].score >= 51 && chartjson.data[i].score <= 75:
                    bar.setAttribute('class', findColor('seventy-five'))
                    break;

                default:
                    bar.setAttribute('class', findColor('hundred'))
                    break;
            }

            bar.style.height = chartjson.data[i].score + prefix;
            bardata.innerText = chartjson.data[i].score;
            bardata.appendChild(bar);
            barrow.appendChild(bardata);
        }

        var legendrow = document.createElement(TROW);
        var legend = document.createElement(TDATA);
        barrow.appendChild(legend);
        barchart.appendChild(barrow);
        barchart.appendChild(legendrow);
        chart.appendChild(barchart);
        document.getElementById('chart').innerHTML = chart.outerHTML;
    }
}