document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const datosLogin = {
    correo: document.getElementById("correo").value,
    password: document.getElementById("password").value,
    tipoUsuario: document.getElementById("tipoUsuario").value
  };

  // Aquí en la vida real deberías validar contra tu base de datos
  alert("Login exitoso \n\n" + JSON.stringify(datosLogin, null, 2));
  this.reset();
});
