document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const supportReason = document.getElementById("support");
  const sex = document.querySelector('input[name="sex"]:checked');

  let hasError = false;

  function checkField(field, errorId) {
    if (!field.value.trim()) {
      document.getElementById(errorId).textContent = "required";
      hasError = true;
    } else {
      document.getElementById(errorId).textContent = "";
    }
  }

  checkField(firstName, "errorFirstName");
  checkField(lastName, "errorLastName");
  checkField(email, "errorEmail");
  checkField(password, "errorPassword");
  checkField(support, "errorsupport");

  if (!sex) {
    document.getElementById("errorSex").textContent = "required";
    hasError = true;
  } else {
    document.getElementById("errorSex").textContent = "";
  }

  if (!hasError) {
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("support", support.value);
    localStorage.setItem("sex", sex.value);
    window.location.href = "profile.html";
  }
});
