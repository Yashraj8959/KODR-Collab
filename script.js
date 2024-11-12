let count = 0;

function updateCounter() {
    document.getElementById("counterValue").innerText = count;
}

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}
