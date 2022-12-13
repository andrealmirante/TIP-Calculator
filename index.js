//start
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}

function formatSplit(value){
    if (value == 1) return value + ' Person'  
    return value + ' People'
}

function update () {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    let fixed = Number(document.getElementById('fixedTip').value)
   
    let tipValue = bill * (tipPercent / 100)
    let tipTotal = tipValue + fixed
    let billTotal = bill + tipValue
    let fixedValue = billTotal + fixed
    let billEach = billTotal / split

document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
document.getElementById('tipValue').innerHTML = formatMoney(tipTotal)
document.getElementById('totalWithTip').innerHTML = formatMoney(fixedValue)
document.getElementById('splitValue').innerHTML = formatSplit (split)
document.getElementById('billEach').innerHTML = formatMoney (fixedValue / split)
}
