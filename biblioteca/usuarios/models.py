from django.contrib.auth.models import AbstractUser
from django.db import models

TIPO_DOCUMENTO = [
    ('cc', 'Cédula de Ciudadanía'),
    ('ti', 'Tarjeta de Identidad'),
]

TIPO_USUARIO = [
    ('estudiante', 'Estudiante'),
    ('docente', 'Docente'),
    ('administrador', 'Administrador'),
]

class Usuario(AbstractUser):
    nombre_completo = models.CharField(max_length=150)
    edad = models.PositiveIntegerField()
    tipo_documento = models.CharField(max_length=2, choices=TIPO_DOCUMENTO)
    numero_documento = models.CharField(max_length=20, unique=True)
    tipo_usuario = models.CharField(max_length=20, choices=TIPO_USUARIO)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
