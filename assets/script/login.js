// index html
const formSmoke = document.getElementById("login-fetch");

formSmoke.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const data = new URLSearchParams();
  data.append("email", email);
  data.append("password", password);

  const response = await fetch("https://st2lww-8888.csb.app/auth/login", {
    method: "POST",
    body: data,
  });
  const resnposeLogin = await response.json();
  if (resnposeLogin.success) {
    window.alert(resnposeLogin.message);
    window.location = "/survey.html";
  } else {
    window.alert(resnposeLogin.message);
  }
  addForm.reset();
});
