const input = document.querySelector(`input`);
const valueCheck = parseInt(input.getAttribute("data-length"));
function oninputBlur(event) {
  let span = event.currentTarget.value;
  //console.log(span);
    console.log(span.length);
    if (span.length === valueCheck) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  }
input.addEventListener(`blur`, oninputBlur);
