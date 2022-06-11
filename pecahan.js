var btnSubmit = document.getElementById('submit')
btnSubmit.addEventListener('click', generate)

function generate() {
    var output = []
    document.getElementById('myTable').innerHTML = ''

    var number = document.getElementById('number').value
    var sNumber = number.toString()

    for (var i = 0, len = sNumber.length; i < len; i++) {
        if (+sNumber.charAt(i) === 0) {
            output = ['Tidak boleh ada angka 0']
            break
        }
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