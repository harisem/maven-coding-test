var output = []
var btnSubmit = document.getElementById('submit')
btnSubmit.addEventListener('click', generate)

function generate() {
    var number = document.getElementById('number').value
    var sNumber = number.toString()

    for (var i = 0, len = sNumber.length; i < len; i++) {
        var length = len - 1
        var n = Math.pow(10, length - i)
        output.push(+sNumber.charAt(i) * n)
    }

    output.map(el => {
        var table = document.getElementById('myTable')
        var tr = document.createElement('tr')
        table.appendChild(tr)

        var td = document.createElement('td')
        td.innerText = el;
        tr.appendChild(td)
    })
}