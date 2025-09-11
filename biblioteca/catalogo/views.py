from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

# Login
def login_view(request):
    if request.user.is_authenticated:
        return redirect('home')  # Ya está logueado

    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'catalogo/login.html', {'error': 'Usuario o contraseña incorrectos'})
    return render(request, 'catalogo/login.html')


# Registro
def registro_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if User.objects.filter(username=username).exists():
            return render(request, 'catalogo/registro.html', {'error': 'El usuario ya existe'})
        user = User.objects.create_user(username=username, password=password)
        login(request, user)
        return redirect('home')
    return render(request, 'catalogo/registro.html')


# Home (solo si está logueado)
def home_view(request):
    if not request.user.is_authenticated:
        return redirect('login')
    return render(request, 'catalogo/home.html')


# Logout
def logout_view(request):
    logout(request)
    return redirect('login')
