function number(val) {
    document.getElementById("result").value += val;
}

function sqrt() {
    let sqrt_val = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(sqrt_val);
}

function sqrt_rt() {
    let sqrt_rt_val = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(sqrt_rt_val, 2);
}

function c(val) {
    document.getElementById("result").value = val;
}

function ce() {

    let string = document.getElementById("result").value;
    let output = string.toString();

    if (output) {
        output = output.substr(0, output.length - 1);
        document.getElementById("result").value = output;
    }

}

function summ() {
    c(eval(document.getElementById("result").value))
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Delete") {
        c("")
    } else if (key === "Backspace") {
        ce()
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


