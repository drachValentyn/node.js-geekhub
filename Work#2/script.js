function number(val) {
    document.getElementById("result").value += val;
}

function sqrt() {
    let sqrtValue = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(sqrtValue);
}

function sqrtPow() {
    let sqrtPowValue = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(sqrtPowValue, 2);
}

function reset(val) {
    document.getElementById("result").value = val;
}

function resetOne() {

    let string = document.getElementById("result").value;
    let output = string.toString();

    if (output) {
        output = output.substr(0, output.length - 1);
        document.getElementById("result").value = output;
    }

}

function notEval(str) {
    return Function(`'use strict'; return (${str})`)()
}


function summ() {
    reset(notEval(document.getElementById("result").value))
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Delete") {
        reset("")
    } else if (key === "Backspace") {
        resetOne()
    }
});

document.onkeypress = function isNumberKey(evt) {

    let charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

        if (charCode === 47) {
            document.getElementById("result").value += '/';
        } else if (charCode === 42) {
            document.getElementById("result").value += '*';
        } else if (charCode === 45) {
            document.getElementById("result").value += '-';
        } else if (charCode === 43) {
            document.getElementById("result").value += '+';
        } else if (charCode === 46) {
            document.getElementById("result").value += '.';
        }
    } else if (charCode === 13) {
        summ()
    } else {
        let num = Number(evt.key);
        if (num >= 0 && num <= 9) {
            document.getElementById("result").value += num;
        }
    }

};


