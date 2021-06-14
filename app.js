var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiPly = document.getElementById("buttonMultiPly");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClick() {
    var num1 = document.getElementById('number1');
    var num2 = document.getElementById('number2');

    var numb1 = Number(num1.value);
    var numb2 = Number(num2.value);
    
    result = numb1 + numb2;

    alert(result);
}
function onButtonMinusClick() {
    var num1 = document.getElementById('number1');
    var num2 = document.getElementById('number2');

    var numb1 = Number(num1.value);
    var numb2 = Number(num2.value);
    
    result = numb1 - numb2;

    alert(result)
}
function onButtonMultyPlyClick() {
    var num1 = document.getElementById('number1');
    var num2 = document.getElementById('number2');

    var numb1 = Number(num1.value);
    var numb2 = Number(num2.value);
    
    result = numb1 * numb2;

    alert(result);
}
function onButtonDevideClick() {
    var num1 = document.getElementById('number1');
    var num2 = document.getElementById('number2');

    var numb1 = Number(num1.value);
    var numb2 = Number(num2.value);
    
    result = numb1 / numb2;

    alert(result);
}
buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultyPly.addEventListener('click', onButtonMultyPlyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);