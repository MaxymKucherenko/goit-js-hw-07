const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", newSize);

function newSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

