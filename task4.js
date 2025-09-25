const containerSection= document.getElementById("container");

const secondItems = document.querySelectorAll(".second");

const thirdInOl = document.querySelector("ol .third");

containerSection.textContent = "Hello!";

const footerDiv = document.querySelector("div.footer");
footerDiv.classList.add("main");

footerDiv.classList.remove("main");

const newLi = document.createElement("li")

newLi.textContent = "four";

const ulElement = containerSection.querySelector("ul");
ulElement.appendChild(newLi)