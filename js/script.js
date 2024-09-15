let form = document.getElementById('form')
let input = document.getElementById('input')
let input1 = document.getElementById('input1')
let select1 = document.getElementById('select1')
let select2 = document.getElementById('select2')
let select3 = document.getElementById('select3')
let select4 = document.getElementById('select4')
let select5 = document.getElementById('select5')
let points = 0
let para = document.getElementById('para')

let valid = true

function getloan() {
    let input = document.getElementById('input').value
    let input1 = document.getElementById('input1').value
    let select1 = document.getElementById('select1').value
    let select2 = document.getElementById('select2').value
    let select3 = document.getElementById('select3').value
    let select4 = document.getElementById('select4').value
    let select5 = document.getElementById('select5').value

    let err1 = document.getElementById('err1')
    let err2 = document.getElementById('err2')
    let err3 = document.getElementById('err3')
    let aerr = document.getElementById('aerr')
    let err5 = document.getElementById('err5')
    let err6 = document.getElementById('err6')
    let err7 = document.getElementById('err7')

    if (input1 > input) {
        points = points + 10
        console.log(points)
    }
    else {
        points = points - 10
        console.log(points)
    }
    if (select1 === 'value5') {
        points = points + 10
        console.log(points)
    }
    if (select2 === 'value6') {
        points = points + 5
        console.log(points)
    }
    if (select3 === 'value11') {
        points = points + 10
        console.log(points)
    }
    if (select4 === 'value12') {
        points = points + 5
        console.log(points)
    }
    if (select5 === 'value17') {
        points = points + 10
        console.log(points)
    }
    else {
        points = points + 5
        console.log(points)
    }
    if (points >= 30) {
        para.innerHTML = 'CONGRATULATION YOU ARE QUALIFIED FOR THE LOAN'
        console.log('CONGRATULATION YOU ARE QUALIFIED FOR THE LOAN')
    }
    else {
        para.innerHTML = 'TRY AGAIN'
        console.log('TRY AGAIN')
    }
    document.getElementById('form').reset();


    if (input === "") {
        err1.innerHTML = 'Current amount cant be left blank'
        valid = false
    } else {
        err1.innerHTML = ""
    }

    if (input1 === "") {
        err2.innerHTML = 'Current amount cant be left blank'
        valid = false
    } else {
        err2.innerHTML = ""
    }
    if (select1 === "") {
        err3.innerHTML = 'select option'
        valid = false
    } else {
        err3.innerHTML = ""
    }
    if (select2 === "") {
        aerr.innerHTML = 'Current amount cant be left blank'
        valid = false
    } else {
        aerr.innerHTML = ""
    }
    if (select3 === "") {
        err5.innerHTML = 'Current amount cant be left blank'
        valid = false
    } else {
        err5.innerHTML = ""
    }

    if (select4 === "") {
        err6.innerHTML = 'Current amount cant be left blank'
        valid = false
    } else {
        err6.innerHTML = ""
    }

    if (select5 === "") {
        err7.innerHTML = 'Current amount cant be left blank'
        valid = false
    } else {
        err7.innerHTML = ""
    }

}
