// Comprobar sesión activa
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
if (!usuarioActivo) {
  window.location.href = "login.html";
}

// Obtener historial de reservas
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

// Referencias del DOM
const tablaReservas = document.getElementById("tablaReservas").querySelector("tbody");
const sinReservas = document.getElementById("sinReservas");

// Filtrar reservas del usuario actual
const reservasUsuario = reservas.filter(r => r.usuario === usuarioActivo.correo);

// Mostrar reservas
if (reservasUsuario.length > 0) {
  reservasUsuario.forEach(r => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${r.titulo}</td>
      <td>${r.autor}</td>
      <td>${r.usuario}</td>
      <td>${r.fecha}</td>
    `;
    tablaReservas.appendChild(fila);
  });
} else {
  sinReservas.style.display = "block";
}
