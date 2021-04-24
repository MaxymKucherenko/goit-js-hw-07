const refinput = document.querySelector(`input`);
const refrender = document.querySelector("[data-action='render']");
const refdestroy = document.querySelector("[data-action='destroy']");
const refboxes = document.querySelector(`#boxes`);
function getRandomColor() {
  return `rgb(${(Math.random() * 256) << 0}, ${(Math.random() * 256) << 0}, ${
    (Math.random() * 256) << 0
  })`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = div.style.height = i * 10 + 20 + "px";
    div.style.background = getRandomColor();
    boxes.push(div);
  }
  refboxes.append(...boxes);
}
refrender.addEventListener("click", () => {
  if (refinput.value > +refinput.min && refinput.value < +refinput.max) {
    createBoxes(refinput.value);
  }
});
refdestroy.addEventListener("click", () => (refboxes.innerHTML = ""));

console.log(refinput.max);
