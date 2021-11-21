import * as func from "./functions.js";
$(document).ready(() => {
    let dt = $('.content dt');
    // let dtt = document.getElementsByClassName("content")[0].getElementsByTagName("dt")[0];
    // dtt.addEventListener("click", (this) => { console.log(this) });
    dt.on("click", (x) => {
        console.log($(this));
        ele.css({ "color": "red" });
    });
    // dt.css({ "color": "red" });
    func.printValue(dt);
});
