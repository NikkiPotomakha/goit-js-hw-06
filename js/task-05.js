const nameInput = document.getElementById("name-input");

const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const currentName = nameInput.value.trim();
  nameOutput.textContent = currentName === "" ? "Anonymous" : currentName;
});
