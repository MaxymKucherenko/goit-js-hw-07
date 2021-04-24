let counterValue = 0;
const dec = document.querySelector(`[data-action = "decrement"]`);
const inc = document.querySelector(`[data-action = "increment"]`);
const result = document.querySelector(`#value`);

const increment = () => {
    counterValue += 1;
    result.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    result.textContent = counterValue;
};

dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);