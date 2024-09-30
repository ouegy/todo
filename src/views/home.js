import { createElement, createImage, createHeader } from "../index.js";

function createHome() {
    const home = createHeader("home");
    // get default projects
    // get default tasks
    // render projects
    // render tasks
    return home;
}

export default function loadHome() {
    const content = document.getElementById("main");
    content.appendChild(createHome());
}
