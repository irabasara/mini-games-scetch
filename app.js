const container = document.querySelector("#board");
const PIXI = 500;

for (let i = 0; i < PIXI; i += 1) {
  const square = document.createElement("div");
  square.classList.add("pixi");
  square.addEventListener("mouseover", () => hoverPixi(square));

  square.addEventListener("mouseleave", () => {
    removePixi(square);
  });
  container.append(square);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function hoverPixi(element) {
  const color = getRandomHexColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`;
}

function removePixi(element) {
  element.style.backgroundColor = "#373737";
  element.style.boxShadow = "0 0 2px #000";
}
