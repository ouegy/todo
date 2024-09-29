import { createElement, createImage, createHeader } from "./index.js";

function createThisWeek() {
    const week = "This Week";
    const home = createHeader(week);
    return home;
}

export default function loadThisWeek() {
    const content = document.getElementById("main");
    content.appendChild(createThisWeek());
}
