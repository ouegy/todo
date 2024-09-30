import { getProjects, createElement } from "..";
import { loadForm } from "../views/form";

function replaceChildren() {
    const content = document.getElementById("main");
    content.replaceChildren();
}

function renderProjects() {
    const sidebarList = document.getElementById("projects");
    const projects = getProjects();
    projects.forEach((project) => {
        const ele = createElement("li", project.title, "project");
        sidebarList.appendChild(ele);
    });
}

function toggleForm() {
    const addProject = document.getElementById("add-project");
    addProject.addEventListener("click", () => {
        const newForm = loadForm();
    });
}

export { replaceChildren, renderProjects, toggleForm };
