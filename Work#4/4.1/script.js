
let timer = true;
let hold;
let is_time;
let is_change = -1;
let onclick = null;
let buttons = document.querySelectorAll('button');
let result = document.getElementById('result');


for (let i = 0; i < buttons.length; ++i) {


    buttons[i].onmousedown = function insertText(e) {
        this.style["background-color"] = "red"
        let text = this.getAttribute('data-text').split("");
        let number = this.getAttribute('data-number');
        timer = true;
        clearTimeout(is_time);
        if (onclick !== e.target) {
            timer = false;
        }

        if (is_change >= text.length - 1 || onclick !== e.target) {
            is_change = 0;
            onclick = e.target;
        } else {
            is_change = is_change + 1;
        }

        if (text[0] === '#') {
            result.value = result.value.slice(0, -1);
            hold = setTimeout(function() {
                result.value = "";
                console.log('ok')
            }, 1000);
            return;
        }

        hold = setTimeout(function() {
            result.value = result.value.slice(0, -1) + number;
        }, 1000);

        result.value = timer ? result.value.slice(0, -1) + text[is_change] : result.value + text[is_change];
    };


    buttons[i].onmouseup = function leaveText(e) {
        clearTimeout(hold);
        timer = true;

        is_time = setTimeout(function() {
            is_change = -1;
            timer = false;
            e.target = null;
            console.log(buttons[i].style["background-color"])
            buttons[i].style["background-color"] = 'unset'

        }, 1000);

        result.focus();

        result.selectionStart = result.selectionEnd = result.value.length;

    };


}
