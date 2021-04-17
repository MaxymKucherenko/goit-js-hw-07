let counterValue = 0;
const result = document.querySelector(`#value`);
const increment = () => {
    counterValue += 1;
    result.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    result.textContent = counterValue;
};

const dec = document.querySelector(`[data-action = "decrement"]`);
dec.addEventListener("click", decrement);

const inc = document.querySelector(`[data-action = "increment"]`);
inc.addEventListener("click", increment);