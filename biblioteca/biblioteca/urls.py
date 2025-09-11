from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("catalogo.urls")),  # Home principal
    path('usuarios/', include('usuarios.urls', namespace='usuarios')),
    path('', include('catalogo.urls')),  # tu app de libros

]
