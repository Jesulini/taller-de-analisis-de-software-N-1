from django.shortcuts import render, get_object_or_404
from .models import Libro
from django.contrib.auth.decorators import login_required

@login_required(login_url='/usuarios/login/')
def home(request):
    libros = Libro.objects.all()
    return render(request, "catalogo/home.html", {"libros": libros, "usuario": request.user})

@login_required(login_url='/usuarios/login/')
def detalle_libro(request, libro_id):
    libro = get_object_or_404(Libro, id=libro_id)
    return render(request, "catalogo/libro.html", {"libro": libro, "usuario": request.user})
