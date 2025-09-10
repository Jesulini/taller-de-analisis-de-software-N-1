const searchBar = document.getElementById("searchBar");
const libros = document.querySelectorAll(".libro");

searchBar.addEventListener("keyup", () => {
  const filtro = searchBar.value.toLowerCase();

  libros.forEach(libro => {
    const titulo = libro.querySelector("h3").innerText.toLowerCase();
    const autor = libro.querySelector(".autor").innerText.toLowerCase();

    if (titulo.includes(filtro) || autor.includes(filtro)) {
      libro.style.display = "block";
    } else {
      libro.style.display = "none";
    }
  });
});
