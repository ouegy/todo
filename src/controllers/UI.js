import { getProjects, createElement } from "..";

function replaceChildren() {
    const content = document.getElementById("main");
    content.replaceChildren();
}

function renderProjects() {
    const sidebarList = document.getElementById("projects");
    sidebarList.replaceChildren();
    const projects = getProjects();
    projects.forEach((project) => {
        const ele = createElement("li", project.title, "project");
        sidebarList.appendChild(ele);
    });
}

function displayForm() {
    const addProject = document.getElementById("add-project");
    addProject.addEventListener("click", () => {
        const newProject = document.getElementById("new-project");
        newProject.classList.remove("hidden");
        newProject.classList.add("fade-in");
    });
}

function closeForm() {
    const close = document.getElementById("close");
    close.addEventListener("click", (e) => {
        e.preventDefault;
        console.log("clicked");
        const newProject = document.getElementById("new-project");
        newProject.classList.add("hidden");
    });
}

export { replaceChildren, renderProjects, displayForm, closeForm };
