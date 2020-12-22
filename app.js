let button = document.getElementById("click");
let buttonClose = document.getElementById("close");

button.addEventListener("click", function () {
    let features = "menubar=no, scrollbar=yes, width=500, height=600, status=no, toolbar=no";
    let myWindow = window.open("https://scantrad.net", "", features);
    myWindow.resizeBy("250px", "450px");
    myWindow.moveBy(500, 1200);

    buttonClose.addEventListener("click", function () {
        myWindow.close();
    })
})