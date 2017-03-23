
var result = document.getElementById("answer");

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    if (num2 === 0) {return result.innerHTML = "Error";
    }
    else {return num1 / num2;
    }
    }


function multiplication(num1, num2) {
    return num1 * num2;
}


document.getElementById("addition").onclick = function() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    result.innerHTML = addition(num1, num2);
}

document.getElementById("subtraction").onclick = function() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    result.innerHTML = subtraction(num1, num2);
}

document.getElementById("division").onclick = function() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    result.innerHTML = division(num1, num2).toFixed(2);
}

document.getElementById("multiplication").onclick = function() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    result.innerHTML = multiplication(num1, num2);
}
document.getElementById("clear").onclick = function() {
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    result.innerHTML = "";
}