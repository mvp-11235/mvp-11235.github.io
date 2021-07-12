const body = document.querySelector("body");
let background = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff"]
let random = Math.random() * background.length;

body.style.backgroundColor = background[Math.floor(random)];
