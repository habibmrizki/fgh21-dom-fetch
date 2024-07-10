const form = document.getElementById("login-fetch");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (email === "admin@gmail.com" && password === "1234") {
    // console.log("start");
    window.alert("login succes");
  } else {
    window.alert("suruh login");
  }
});
  