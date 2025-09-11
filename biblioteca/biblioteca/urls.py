from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuarios/', include('usuarios.urls', namespace='usuarios')),  # namespace usuarios
    path('', include('catalogo.urls')),  # catalogo usa su app_name como namespace
]