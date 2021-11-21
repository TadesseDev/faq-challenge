import * as func from "./functions.js";
$(document).ready(() => {
    let dt = $('.content dt');
    dt.on("click", (x) => {
        let element = $(x.target);
        element.css({ "font-weight": "700" });
    });
    dt.on("mouseleave", (x) => {
        let element = $(x.target);
        dt.css({ "font-weight": "400" })
    })
});
