import { getProjects, createElement } from "..";

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

export { replaceChildren, renderProjects };
