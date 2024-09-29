import { createElement, createImage, createHeader } from "../index.js";

function createHome() {
    const home = createHeader("home");
    return home;
}

export default function loadHome() {
    const content = document.getElementById("main");
    content.appendChild(createHome());
}
