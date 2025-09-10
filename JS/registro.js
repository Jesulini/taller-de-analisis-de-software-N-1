document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const datos = {
    nombreCompleto: document.getElementById("nombreCompleto").value,
    edad: document.getElementById("edad").value,
    tipoDocumento: document.getElementById("tipoDocumento").value,
    numeroDocumento: document.getElementById("numeroDocumento").value,
    correo: document.getElementById("correo").value,
    password: document.getElementById("password").value,
    tipoUsuario: document.getElementById("tipoUsuario").value
  };

  alert("Registro válido \n\n" + JSON.stringify(datos, null, 2));
  this.reset();
});
