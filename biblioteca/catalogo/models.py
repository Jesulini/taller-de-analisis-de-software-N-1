# catalogo/models.py
from django.db import models
from usuarios.models import Usuario

class Libro(models.Model):
    titulo = models.CharField(max_length=255)
    autor = models.CharField(max_length=255)
    descripcion = models.TextField()
    stock = models.PositiveIntegerField()
    imagen = models.URLField(blank=True)

    def __str__(self):
        return self.titulo

class Reserva(models.Model):
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.usuario.nombre_completo} - {self.libro.titulo}"
