"use:strict";

const form = document.getElementById("form");
const inputEl = document.getElementById("input-txt");
const ul = document.getElementById("ul");

// Add EventListner to form Element
form.addEventListener("submit", (e) => {
  // calling the todoApp
  todoApp();
  // prevent form from reloading
  e.preventDefault();
});

// todoApp function
const todoApp = () => {
  // storing the input value
  let todoList = inputEl.value;
  // if input is empty
  if (todoList == "") {
    // alert this...
    alert("Sorry, Kindly Input Text");
    // but if not
  } else {
    // creacte new element of list items
    const li = document.createElement("li");
    // make its content to the input value
    li.textContent = todoList;
    // append it into unorder list
    ul.append(li);
    // empty the input after submission
    inputEl.value = "";

    // add rightclick event to list items
    li.addEventListener("contextmenu", () => {
      // when clicked remove li value
      li.remove();
    });

    // add leftclick event to list items
    li.addEventListener("click", () => {
      // when clicked toggle li value
      li.classList.toggle("completed");
    });
  }
};
