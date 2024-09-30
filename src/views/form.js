import { createElement } from "..";

function createForm() {
    const newForm = createElement("div", "", "fade-in");
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

    form.appendChild(title).appendChild(input);
    form.appendChild(description).appendChild(input2);
    form.appendChild(date).appendChild(input3);
    form.appendChild(submit);

    newForm.appendChild(form);

    // <div class="form-container">
    //     <button id="new-book">New Book</button>

    //         <input type="text" id="author" name="author">
    //         <label for="title">Title</label>
    //         <input type="text" id="title" name="title">
    //         <label for="pages">Number of pages</label>
    //         <input type="number" id="pages" name="pages">
    //         <label for="read">Have you read this book?</label>
    //         <fieldset>
    //             <input type="radio" id="yes" name="read" value="Yes">
    //             <label for="Yes">Yes</label>
    //         </fieldset>
    //         <fieldset>
    //             <input type="radio" id="no" name="read" value="No">
    //             <label for="No">No</label>
    //         </fieldset>
    //         <button id="add-new-book">Add New Book</button>
    //     </form>
    // </div>
    return newForm;
}

function loadForm() {
    const content = document.getElementById("main");
    content.replaceChildren();
    content.appendChild(createForm());
    return createForm();
}

export { loadForm };
