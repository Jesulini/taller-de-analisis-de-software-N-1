document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreCompleto").value;
  const edad = document.getElementById("edad").value;
  const tipoDocumento = document.getElementById("tipoDocumento").value;
  const numeroDocumento = document.getElementById("numeroDocumento").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.some(user => user.correo === correo);
  if (existe) {
    alert("Este correo ya está registrado.");
    return;
  }

  const nuevoUsuario = {
    nombre,
    edad,
    tipoDocumento,
    numeroDocumento,
    correo,
    password,
    tipoUsuario
  };

  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
});
