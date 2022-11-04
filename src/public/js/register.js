const btnLogin = document.getElementById("login");
const username = document.getElementById("username");

btnLogin.addEventListener("click", () => {
  if (username.value !== "") {
    document.cookie = `username=${username.value};path=/;SameSite=Lax;Secure`;
    document.location.href = "/";
  } else {
    Swal.fire(
        "Error",
        "El nombre de usuario no puede estar vacío",
        "error"
    );
  }
});
