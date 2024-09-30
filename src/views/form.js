import { createElement } from "..";

function createForm() {
    const newForm = createElement("div", "", "hidden");
    newForm.setAttribute("id", "new-project");
    const form = document.createElement("form");

    const title = createElement("label", "Title");
    title.setAttribute("for", "title");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "title");

    const description = createElement("label", "Description");
    description.setAttribute("for", "description");
    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "description");

    const date = createElement("label", "Due Date");
    date.setAttribute("for", "date");
    const input3 = document.createElement("input");
    input3.setAttribute("type", "date");
    input3.setAttribute("id", "date");

    const submit = createElement("button", "Add Project");
    submit.setAttribute("id", "submit");

    const close = createElement("button", "Close");
    close.setAttribute("id", "close");

    form.appendChild(title).appendChild(input);
    form.appendChild(description).appendChild(input2);
    form.appendChild(date).appendChild(input3);
    form.appendChild(submit);
    form.appendChild(close);

    newForm.appendChild(form);

    return newForm;
}

function loadForm() {
    const content = document.getElementById("main");
    content.replaceChildren();
    content.appendChild(createForm());
    const submit = document.getElementById("submit");
    console.log(submit);
    return submit;
}

export { loadForm };
