const input = document.createElement("input");
const h2 = document.createElement("h2");
input.type = "text";

input.addEventListener("input", () => {
    setTimeout(() => {
        h2.innerHTML = input.value;
    }, 300);
});

document.body.appendChild(input);
document.body.appendChild(h2);