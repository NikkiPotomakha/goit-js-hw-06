const validationInput = document.getElementById("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.trim();
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
