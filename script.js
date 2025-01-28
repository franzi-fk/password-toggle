const input = document.querySelector("#inp-pw");
const button = document.querySelector("#inp-btn");

button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default form submission when clicking the button (prevents page reload)
  if (input.type === "password") {
    input.setAttribute("type", "text");
    button.innerText = "Hide Password";
  } else {
    input.setAttribute("type", "password");
    button.innerText = "Show Password";
  }
});
