// Verificar sesión activa
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
if (!usuarioActivo) {
  window.location.href = "login.html";
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "login.html";
});

// Lista inicial de libros (solo usada si no hay en localStorage)
const librosIniciales = [
  { id: 1, titulo: "El Código Da Vinci", autor: "Dan Brown", descripcion: "Thriller histórico que mezcla arte, religión y misterio.", stock: 10, imagen: "https://covers.openlibrary.org/b/id/240727-L.jpg" },
  { id: 2, titulo: "Hábitos Atómicos", autor: "James Clear", descripcion: "Guía práctica para mejorar hábitos y alcanzar objetivos.", stock: 12, imagen: "https://covers.openlibrary.org/b/id/9251992-L.jpg" },
  { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", descripcion: "Fábula poética sobre la vida y la amistad.", stock: 3, imagen: "https://covers.openlibrary.org/b/id/13114639-L.jpg" },
  { id: 4, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", descripcion: "Obra maestra del realismo mágico latinoamericano.", stock: 15, imagen: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
  { id: 5, titulo: "1984", autor: "George Orwell", descripcion: "Distopía sobre un régimen totalitario que controla la mente y la sociedad.", stock: 20, imagen: "https://covers.openlibrary.org/b/id/11153258-L.jpg" },
  { id: 6, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", descripcion: "Romance y crítica social de la Inglaterra del siglo XIX.", stock: 8, imagen: "https://covers.openlibrary.org/b/id/10521219-L.jpg" },
  { id: 7, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", descripcion: "La gran novela de caballerías y sátira.", stock: 5, imagen: "https://covers.openlibrary.org/b/id/10909258-L.jpg" },
  { id: 8, titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafón", descripcion: "Novela de misterio ambientada en la Barcelona de posguerra.", stock: 14, imagen: "https://covers.openlibrary.org/b/id/11882207-L.jpg" },
  { id: 9, titulo: "Los Juegos del Hambre", autor: "Suzanne Collins", descripcion: "Distopía juvenil donde adolescentes luchan por sobrevivir en un juego mortal.", stock: 25, imagen: "https://covers.openlibrary.org/b/id/10772490-L.jpg" },
  { id: 10, titulo: "Harry Potter y la Piedra Filosofal", autor: "J. K. Rowling", descripcion: "El inicio de la saga del joven mago en Hogwarts.", stock: 30, imagen: "https://covers.openlibrary.org/b/id/10496006-L.jpg" },
  { id: 11, titulo: "Harry Potter y la Cámara Secreta", autor: "J. K. Rowling", descripcion: "Segunda aventura de Harry en Hogwarts enfrentando misterios y monstruos.", stock: 28, imagen: "https://covers.openlibrary.org/b/id/10954166-L.jpg" },
  { id: 12, titulo: "Harry Potter y el Prisionero de Azkaban", autor: "J. K. Rowling", descripcion: "Tercera entrega con secretos del pasado de Harry y nuevos peligros.", stock: 26, imagen: "https://covers.openlibrary.org/b/id/10954167-L.jpg" },
  { id: 13, titulo: "Harry Potter y el Cáliz de Fuego", autor: "J. K. Rowling", descripcion: "Harry participa en el Torneo de los Tres Magos.", stock: 22, imagen: "https://covers.openlibrary.org/b/id/10954168-L.jpg" },
  { id: 14, titulo: "Harry Potter y la Orden del Fénix", autor: "J. K. Rowling", descripcion: "El regreso de Voldemort y la resistencia en Hogwarts.", stock: 18, imagen: "https://covers.openlibrary.org/b/id/10954169-L.jpg" },
  { id: 15, titulo: "Harry Potter y el Misterio del Príncipe", autor: "J. K. Rowling", descripcion: "Descubrimos secretos del pasado de Voldemort.", stock: 4, imagen: "https://covers.openlibrary.org/b/id/10954170-L.jpg" },
  { id: 16, titulo: "Harry Potter y las Reliquias de la Muerte", autor: "J. K. Rowling", descripcion: "El final épico de la saga de Harry Potter.", stock: 21, imagen: "https://covers.openlibrary.org/b/id/10954171-L.jpg" },
  { id: 17, titulo: "Percy Jackson: El Ladrón del Rayo", autor: "Rick Riordan", descripcion: "Primer libro de aventuras mitológicas de Percy Jackson.", stock: 12, imagen: "https://covers.openlibrary.org/b/id/11141765-L.jpg" },
  { id: 18, titulo: "Percy Jackson: El Mar de los Monstruos", autor: "Rick Riordan", descripcion: "Segunda aventura de Percy y sus amigos semidioses.", stock: 10, imagen: "https://covers.openlibrary.org/b/id/11141766-L.jpg" },
  { id: 19, titulo: "It", autor: "Stephen King", descripcion: "Horror clásico sobre un payaso aterrador y la lucha de un grupo de amigos.", stock: 16, imagen: "https://covers.openlibrary.org/b/id/8225631-L.jpg" },
  { id: 20, titulo: "Carrie", autor: "Stephen King", descripcion: "Joven con poderes telequinéticos y la tragedia de su venganza.", stock: 6, imagen: "https://covers.openlibrary.org/b/id/8231993-L.jpg" },
  { id: 21, titulo: "El Resplandor", autor: "Stephen King", descripcion: "Terror psicológico en un hotel aislado.", stock: 11, imagen: "https://covers.openlibrary.org/b/id/8315406-L.jpg" },
  { id: 22, titulo: "La Chica del Tren", autor: "Paula Hawkins", descripcion: "Thriller sobre secretos y desapariciones.", stock: 19, imagen: "https://covers.openlibrary.org/b/id/8228787-L.jpg" },
  { id: 23, titulo: "Divergente", autor: "Veronica Roth", descripcion: "Sociedad dividida por facciones y la lucha por la libertad.", stock: 13, imagen: "https://covers.openlibrary.org/b/id/8228988-L.jpg" },
  { id: 24, titulo: "Insurgente", autor: "Veronica Roth", descripcion: "Segunda parte de la saga Divergente.", stock: 7, imagen: "https://covers.openlibrary.org/b/id/8228989-L.jpg" },
  { id: 25, titulo: "Leal", autor: "Veronica Roth", descripcion: "Tercera parte de la saga Divergente.", stock: 9, imagen: "https://covers.openlibrary.org/b/id/8228990-L.jpg" },
  { id: 26, titulo: "El Hobbit", autor: "J. R. R. Tolkien", descripcion: "Aventura fantástica de Bilbo Bolsón en la Tierra Media.", stock: 17, imagen: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { id: 27, titulo: "La Comunidad del Anillo", autor: "J. R. R. Tolkien", descripcion: "Primer libro de la trilogía de El Señor de los Anillos.", stock: 22, imagen: "https://covers.openlibrary.org/b/id/8231994-L.jpg" },
  { id: 28, titulo: "Las Dos Torres", autor: "J. R. R. Tolkien", descripcion: "Segunda entrega de El Señor de los Anillos.", stock: 20, imagen: "https://covers.openlibrary.org/b/id/8231995-L.jpg" },
  { id: 29, titulo: "El Retorno del Rey", autor: "J. R. R. Tolkien", descripcion: "Final épico de la trilogía de El Señor de los Anillos.", stock: 5, imagen: "https://covers.openlibrary.org/b/id/8231996-L.jpg" }
];

// Si no existen libros en localStorage, inicializarlos
if (!localStorage.getItem("libros")) {
  localStorage.setItem("libros", JSON.stringify(librosIniciales));
}

// Cargar siempre desde localStorage
let libros = JSON.parse(localStorage.getItem("libros"));

const catalogo = document.getElementById("catalogo");

function renderLibros(lista) {
  catalogo.innerHTML = "";
  lista.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("libro");
    div.innerHTML = `
      <img src="${libro.imagen}" alt="${libro.titulo}">
      <h3>${libro.titulo}</h3>
      <p class="autor">${libro.autor}</p>
      <p class="stock ${libro.stock <= 3 ? "pocas" : "disponible"}">
        ${libro.stock <= 3 ? "Pocas unidades" : "Disponible"}
      </p>
      <button class="ver-mas" data-id="${libro.id}">Ver más</button>
    `;
    catalogo.appendChild(div);
  });

  // Reasignar eventos "Ver más"
  document.querySelectorAll(".ver-mas").forEach(btn => {
    btn.addEventListener("click", () => {
      const libroId = btn.getAttribute("data-id");
      localStorage.setItem("libroSeleccionado", libroId);
      window.location.href = "libro.html";
    });
  });
}

// Render inicial
renderLibros(libros);

// Buscador
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  const texto = searchBar.value.toLowerCase();
  const filtrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(texto) ||
    libro.autor.toLowerCase().includes(texto)
  );
  renderLibros(filtrados);
});
