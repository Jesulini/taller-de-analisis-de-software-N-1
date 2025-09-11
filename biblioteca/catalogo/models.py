from django.db import models

class Libro(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.CharField(max_length=200)
    descripcion = models.TextField()
    stock = models.PositiveIntegerField(default=0)
    imagen = models.URLField()

    def __str__(self):
        return self.titulo
