const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
e.preventDefault;
button.classList.add("animate");
setTimeout(() => {
button.classList.remove("animate");
}, 600);
});