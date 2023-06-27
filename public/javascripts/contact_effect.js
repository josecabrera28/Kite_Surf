
let inputs = document.querySelectorAll(".form-control");
console.log(inputs);

inputs.forEach(element => {
    element.addEventListener("focus", () => {
        element.style.boxShadow = "0 0 0 0.2rem rgb(252, 185, 0)";
    });
    element.addEventListener("blur", () => {
        element.style.boxShadow = "";
    });
});