document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(
    user => user.correo === correo && user.password === password && user.tipoUsuario === tipoUsuario
  );

  if (usuario) {
    // Guardamos sesión activa
    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
    alert("Bienvenido " + usuario.nombre);
    window.location.href = "home.html";
  } else {
    alert("Credenciales incorrectas.");
  }
});
