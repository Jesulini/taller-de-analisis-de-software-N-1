from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("libro/<int:libro_id>/", views.detalle_libro, name="detalle_libro"),
]
