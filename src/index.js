import "./styles.css";
import loadHome from "./views/home";
import loadToday from "./views/today";
import loadThisWeek from "./views/this-week";
import { replaceChildren } from "./controllers/UI";

window.onload = (event) => {
    getTab();
    console.log("loaded");
};

// const defaultProject = new Project(
//     "Default Project",
//     "This is how the description is displayed",
//     "Due Date",
//     "Low"
// );

// Object.setPrototypeOf(Todo.prototype, Project.prototype);

function createHeader(pageName) {
    const home = document.createElement("div");
    const title = createElement("h1", pageName, "title");
    home.appendChild(title);

    return home;
}

function createElement(tag, text, classes) {
    const ele = document.createElement(tag);
    ele.textContent = text;
    ele.classList.add(classes);
    return ele;
}

function createImage(src, alt, classes) {
    const image = document.createElement("img");
    image.classList.add(classes);
    image.src = src;
    image.alt = alt;
    return image;
}

function getTab() {
    const links = Array.from(document.querySelectorAll("li.sidebar-menu"));
    console.log(links);
    links.forEach((element) => {
        element.addEventListener("click", function (e) {
            let tab = e.target.textContent;
            switchTab(tab);
        });
    });
}

function switchTab(tab) {
    switch (tab) {
        case "Home":
            replaceChildren();
            loadHome();
            break;
        case "Today":
            replaceChildren();
            loadToday();
            break;
        case "This Week":
            replaceChildren();
            loadThisWeek();
            break;

        default:
            loadHome();
            break;
    }
}

export { createElement, createImage, createHeader };
