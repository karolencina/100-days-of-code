// Set initial value
let count = 0;

// Select value and buttons
const VALUE = document.querySelector('#value');
const BTNS = document.querySelectorAll('.btn');

// Check which button is clicked
BTNS.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const BTN_TYPE = e.currentTarget.classList;
        if (BTN_TYPE.contains('decrease')) {
            count--;
            document.querySelector('#value').innerHTML = count;
        }
        else if (BTN_TYPE.contains('reset')) {
            count = 0;
            document.querySelector('#value').innerHTML = count;
        }
        else if (BTN_TYPE.contains('increase')) {
            count++;
            document.querySelector('#value').innerHTML = count;
        }
        if (count > 0) {
            VALUE.style.color = 'var(--c-dark-pink)';
        }
        else if (count < 0) {
            VALUE.style.color = 'var(--c-dark-blue)';
        }
        else {
            VALUE.style.color = 'var(--c-black)';
        }
    })
})
