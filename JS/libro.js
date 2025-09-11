// Comprobar sesión activa
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
if (!usuarioActivo) {
  window.location.href = "login.html";
}

// Obtener libro seleccionado
const libroId = localStorage.getItem("libroSeleccionado");
const libros = JSON.parse(localStorage.getItem("libros")) || [];
const libro = libros.find(l => l.id == libroId);

if (!libro) {
  alert("Libro no encontrado.");
  window.location.href = "home.html";
}

// Mostrar información del libro
document.getElementById("libroTitulo").textContent = libro.titulo;
document.getElementById("libroAutor").textContent = libro.autor;
document.getElementById("libroDescripcion").textContent = libro.descripcion;
document.getElementById("libroImg").src = libro.imagen;

// Botón consultar disponibilidad
const btnDisponibilidad = document.getElementById("btnDisponibilidad");
const libroStock = document.getElementById("libroStock");

btnDisponibilidad.addEventListener("click", () => {
  libroStock.style.display = "block";
  libroStock.textContent = libro.stock > 0 
    ? `${libro.stock} unidades disponibles` 
    : "Agotado";
});

// Botón reservar libro
const btnReservar = document.getElementById("btnReservar");
const mensajeReserva = document.getElementById("mensajeReserva");

btnReservar.addEventListener("click", () => {
  if (libro.stock > 0) {
    libro.stock -= 1;
    localStorage.setItem("libros", JSON.stringify(libros));

    mensajeReserva.style.display = "block";
    mensajeReserva.textContent = `Has reservado "${libro.titulo}". Stock restante: ${libro.stock}`;
    libroStock.textContent = libro.stock > 0 
      ? `${libro.stock} unidades disponibles` 
      : " Agotado";
  } else {
    mensajeReserva.style.display = "block";
    mensajeReserva.textContent = "Lo sentimos, este libro está agotado.";
  }
});
