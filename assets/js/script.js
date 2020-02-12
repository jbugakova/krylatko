const counters = document.getElementsByClassName('counter');

init();

function init() {
    addSpacesForNumbers();
}

function addSpacesForNumbers() {
    Array.prototype.forEach.call(counters, element => {
        const value = element.innerText;
        const newValue = Number(value).toLocaleString();
        element.innerText = newValue;
    });
}