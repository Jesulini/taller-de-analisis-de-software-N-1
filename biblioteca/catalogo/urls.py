from django.urls import path
from . import views

app_name = "catalogo"

urlpatterns = [
    path("", views.home, name="home"),
    path("libro/<int:libro_id>/", views.detalle_libro, name="detalle_libro"),
    path("historial/", views.historial, name="historial"),  # Ruta para historial
]
