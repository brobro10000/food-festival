require("bootstrap");
const createEl = require("./domMethods");
const { createLoremIpsum, dateConverter } = require("./helpers");

$(document).ready(function () {

    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    function onEventClick(calEvent) {

        const start = dateConverter(calEvent.start);
        localStorage.setItem("currentEvent", JSON.stringify({
            title: calEvent.title,
            subtitle: start,
            description: calEvent.description,
            image: calEvent.image
        }))

        window.location.href = "events.html"

    }
})