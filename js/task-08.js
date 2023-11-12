const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = this.elements.email.value;
  const passwordValue = this.elements.password.value;

  if (!emailValue || !passwordValue) {
    alert("All fields must be filled!");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  this.reset();
});
