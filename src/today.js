import { createElement, createImage, createHeader } from "./index.js";

function createToday() {
    const home = createHeader("today");
    return home;
}

export default function loadToday() {
    const content = document.getElementById("main");
    content.appendChild(createToday());
}
