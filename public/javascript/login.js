// Listen for submit event on form
function signupFormHandler(event) {
  event.preventDefault();

  // POST the username, email, and password from the form to our server
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // make a fetch() POST request to the /api/users/ by updating the signupFormHandler() logic
  if (username && email && password) {
    fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
    });
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
