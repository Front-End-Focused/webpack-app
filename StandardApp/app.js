function printCurrentDateAndTime() {
    console.log(`Today: `, new Date())
}

const h1Element = document.querySelector("h1");

function time() {
    const currentTime = new Date().toLocaleTimeString()
    h1Element.textContent = currentTime;
  }

function printHello() {
    console.log('Hello!')
}

function init() {
    console.log('Application initialization...');
    printHello();
    printCurrentDateAndTime();

    setInterval(time, 1000);
}

init();