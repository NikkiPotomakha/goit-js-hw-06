const validationInput = document.querySelector("#validation-input");

function verification(event) {
  const inputValueLength = Number(validationInput.value.trim().length);
  const inputDataLength = Number(validationInput.dataset.length);

  if (inputValueLength === inputDataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
validationInput.addEventListener("blur", verification);
