from catalogo.models import Libro

libros = [
    {"titulo": "El Código Da Vinci", "autor": "Dan Brown", "descripcion": "Thriller histórico que mezcla arte, religión y misterio.", "stock": 10, "imagen": "https://covers.openlibrary.org/b/id/240727-L.jpg"},
    {"titulo": "Hábitos Atómicos", "autor": "James Clear", "descripcion": "Guía práctica para mejorar hábitos y alcanzar objetivos.", "stock": 12, "imagen": "https://covers.openlibrary.org/b/id/9251992-L.jpg"},
    {"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry", "descripcion": "Fábula poética sobre la vida y la amistad.", "stock": 3, "imagen": "https://covers.openlibrary.org/b/id/13114639-L.jpg"},
    {"titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez", "descripcion": "Obra maestra del realismo mágico latinoamericano.", "stock": 15, "imagen": "https://covers.openlibrary.org/b/id/8231856-L.jpg"},
    {"titulo": "1984", "autor": "George Orwell", "descripcion": "Distopía sobre un régimen totalitario que controla la mente y la sociedad.", "stock": 20, "imagen": "https://covers.openlibrary.org/b/id/11153258-L.jpg"},
    {"titulo": "Orgullo y Prejuicio", "autor": "Jane Austen", "descripcion": "Romance y crítica social de la Inglaterra del siglo XIX.", "stock": 8, "imagen": "https://covers.openlibrary.org/b/id/10521219-L.jpg"},
    {"titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "descripcion": "La gran novela de caballerías y sátira.", "stock": 5, "imagen": "https://covers.openlibrary.org/b/id/10909258-L.jpg"},
    {"titulo": "La Sombra del Viento", "autor": "Carlos Ruiz Zafón", "descripcion": "Novela de misterio ambientada en la Barcelona de posguerra.", "stock": 14, "imagen": "https://covers.openlibrary.org/b/id/11882207-L.jpg"},
    {"titulo": "Los Juegos del Hambre", "autor": "Suzanne Collins", "descripcion": "Distopía juvenil donde adolescentes luchan por sobrevivir en un juego mortal.", "stock": 25, "imagen": "https://covers.openlibrary.org/b/id/10772490-L.jpg"},
    {"titulo": "Harry Potter y la Piedra Filosofal", "autor": "J. K. Rowling", "descripcion": "El inicio de la saga del joven mago en Hogwarts.", "stock": 30, "imagen": "https://covers.openlibrary.org/b/id/10496006-L.jpg"},
    {"titulo": "Harry Potter y la Cámara Secreta", "autor": "J. K. Rowling", "descripcion": "Segunda aventura de Harry en Hogwarts enfrentando misterios y monstruos.", "stock": 28, "imagen": "https://covers.openlibrary.org/b/id/10954166-L.jpg"},
    {"titulo": "Harry Potter y el Prisionero de Azkaban", "autor": "J. K. Rowling", "descripcion": "Tercera entrega con secretos del pasado de Harry y nuevos peligros.", "stock": 26, "imagen": "https://covers.openlibrary.org/b/id/10954167-L.jpg"},
    {"titulo": "Harry Potter y el Cáliz de Fuego", "autor": "J. K. Rowling", "descripcion": "Harry participa en el Torneo de los Tres Magos.", "stock": 22, "imagen": "https://covers.openlibrary.org/b/id/10954168-L.jpg"},
    {"titulo": "Harry Potter y la Orden del Fénix", "autor": "J. K. Rowling", "descripcion": "El regreso de Voldemort y la resistencia en Hogwarts.", "stock": 18, "imagen": "https://covers.openlibrary.org/b/id/10954169-L.jpg"},
    {"titulo": "Harry Potter y el Misterio del Príncipe", "autor": "J. K. Rowling", "descripcion": "Descubrimos secretos del pasado de Voldemort.", "stock": 4, "imagen": "https://covers.openlibrary.org/b/id/10954170-L.jpg"},
    {"titulo": "Harry Potter y las Reliquias de la Muerte", "autor": "J. K. Rowling", "descripcion": "El final épico de la saga de Harry Potter.", "stock": 21, "imagen": "https://covers.openlibrary.org/b/id/10954171-L.jpg"},
    {"titulo": "Percy Jackson: El Ladrón del Rayo", "autor": "Rick Riordan", "descripcion": "Primer libro de aventuras mitológicas de Percy Jackson.", "stock": 12, "imagen": "https://covers.openlibrary.org/b/id/11141765-L.jpg"},
    {"titulo": "Percy Jackson: El Mar de los Monstruos", "autor": "Rick Riordan", "descripcion": "Segunda aventura de Percy y sus amigos semidioses.", "stock": 10, "imagen": "https://covers.openlibrary.org/b/id/11141766-L.jpg"},
    {"titulo": "It", "autor": "Stephen King", "descripcion": "Horror clásico sobre un payaso aterrador y la lucha de un grupo de amigos.", "stock": 16, "imagen": "https://covers.openlibrary.org/b/id/8225631-L.jpg"},
    {"titulo": "Carrie", "autor": "Stephen King", "descripcion": "Joven con poderes telequinéticos y la tragedia de su venganza.", "stock": 6, "imagen": "https://covers.openlibrary.org/b/id/8231993-L.jpg"},
    {"titulo": "El Resplandor", "autor": "Stephen King", "descripcion": "Terror psicológico en un hotel aislado.", "stock": 11, "imagen": "https://covers.openlibrary.org/b/id/8315406-L.jpg"},
    {"titulo": "La Chica del Tren", "autor": "Paula Hawkins", "descripcion": "Thriller sobre secretos y desapariciones.", "stock": 19, "imagen": "https://covers.openlibrary.org/b/id/8228787-L.jpg"},
    {"titulo": "Divergente", "autor": "Veronica Roth", "descripcion": "Sociedad dividida por facciones y la lucha por la libertad.", "stock": 13, "imagen": "https://covers.openlibrary.org/b/id/8228988-L.jpg"},
    {"titulo": "Insurgente", "autor": "Veronica Roth", "descripcion": "Segunda parte de la saga Divergente.", "stock": 7, "imagen": "https://covers.openlibrary.org/b/id/8228989-L.jpg"},
    {"titulo": "Leal", "autor": "Veronica Roth", "descripcion": "Tercera parte de la saga Divergente.", "stock": 9, "imagen": "https://covers.openlibrary.org/b/id/8228990-L.jpg"},
    {"titulo": "El Hobbit", "autor": "J. R. R. Tolkien", "descripcion": "Aventura fantástica de Bilbo Bolsón en la Tierra Media.", "stock": 17, "imagen": "https://covers.openlibrary.org/b/id/6979861-L.jpg"},
    {"titulo": "La Comunidad del Anillo", "autor": "J. R. R. Tolkien", "descripcion": "Primer libro de la trilogía de El Señor de los Anillos.", "stock": 22, "imagen": "https://covers.openlibrary.org/b/id/8231994-L.jpg"},
    {"titulo": "Las Dos Torres", "autor": "J. R. R. Tolkien", "descripcion": "Segunda entrega de El Señor de los Anillos.", "stock": 20, "imagen": "https://covers.openlibrary.org/b/id/8231995-L.jpg"},
    {"titulo": "El Retorno del Rey", "autor": "J. R. R. Tolkien", "descripcion": "Final épico de la trilogía de El Señor de los Anillos.", "stock": 5, "imagen": "https://covers.openlibrary.org/b/id/8231996-L.jpg"},
]

def run():
    for l in libros:
        # Evita duplicados comprobando por título y autor
        obj, created = Libro.objects.get_or_create(
            titulo=l["titulo"],
            autor=l["autor"],
            defaults={
                "descripcion": l["descripcion"],
                "stock": l["stock"],
                "imagen": l["imagen"],
            }
        )
        if created:
            print(f'✅ Libro agregado: {obj.titulo}')
        else:
            print(f'⚠️ Libro ya existente: {obj.titulo}')
