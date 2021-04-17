const ref = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
ref.addEventListener("input", onInput);

function onInput(event) {
    let newSpan = event.currentTarget.value;
    if (newSpan) {
      span.textContent = newSpan;
    } else {
      span.textContent = "незнакомец";
    }
};