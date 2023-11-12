const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValueSpan = document.getElementById("value");

let counterValue = 0;
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;

  counterValueSpan.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;

  counterValueSpan.textContent = counterValue;
});
