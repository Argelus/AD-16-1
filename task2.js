function getFormvalue(event){
    event.preventDefault();

const form = document.getElementById("form1")

const firstName = form.elements["fname"].value;
const lastName = form.elements["lname"].value;

console.log("Primer nombre: ", firstName);
console.log("Segundo nombre: ", lastName);

return false
}