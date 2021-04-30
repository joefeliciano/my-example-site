function greet() {
    var name = document.getElementById("name").value;
    var greeting = document.getElementById("main-1");
    var mainName = document.querySelector(".main-2a");
    var buttons = document.querySelector(".main-2b");
    var bg = document.querySelector(".main-inner");
    greeting.innerHTML = `<h1 class="main-1">Hello ${name}, welcome to my site!</h1>`
    buttons.style.opacity = "1"
    buttons.style.position = "static"
    mainName.style.display = "none"
};
