# catalogo/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Libro, Reserva
from django.contrib.auth.decorators import login_required
from django.contrib import messages

@login_required(login_url='/usuarios/login/')
def home(request):
    libros = Libro.objects.all()
    return render(request, "catalogo/home.html", {"libros": libros, "usuario": request.user})

@login_required(login_url='/usuarios/login/')
def detalle_libro(request, libro_id):
    libro = get_object_or_404(Libro, id=libro_id)
    
    if request.method == "POST":
        if libro.stock > 0:
            libro.stock -= 1
            libro.save()
            Reserva.objects.create(libro=libro, usuario=request.user)
            messages.success(request, f'Has reservado "{libro.titulo}". Stock restante: {libro.stock}')
        else:
            messages.error(request, "Lo sentimos, este libro está agotado.")
        return redirect('catalogo:detalle_libro', libro_id=libro.id)
    
    return render(request, "catalogo/libro.html", {"libro": libro, "usuario": request.user})

@login_required(login_url='/usuarios/login/')
def historial(request):
    reservas = Reserva.objects.filter(usuario=request.user).order_by('-fecha')
    return render(request, "catalogo/historial.html", {"reservas": reservas, "usuario": request.user})
