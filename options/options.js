const submitButton = document.querySelector("#submitRGB");

submitButton.addEventListener("click", () => {
    let redColor = document.querySelector("#red").value;
    let greenColor = document.querySelector("#green").value;
    let blueColor = document.querySelector("#blue").value;

    let retry = 0;
    let intervalId = setInterval(function () {
        if (retry++ > 5 || redColor) {
            clearInterval(intervalId);
        }
        redColor = document.querySelector("#red").value;
        greenColor = document.querySelector("#green").value;
        blueColor = document.querySelector("#blue").value;
    }, 1000);
    chrome.storage.sync.set({ 'color': `rgb(${redColor}, ${greenColor}, ${blueColor})`});
});
