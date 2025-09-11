from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Usuario
from django.contrib.auth import authenticate

TIPO_USUARIO = [
    ('estudiante', 'Estudiante'),
    ('docente', 'Docente'),
    ('administrador', 'Administrador'),
]

class RegistroForm(UserCreationForm):
    class Meta:
        model = Usuario
        fields = [
            "nombre_completo",
            "username",
            "email",
            "password1",
            "password2",
            "edad",
            "tipo_documento",
            "numero_documento",
            "tipo_usuario",
        ]
        widgets = {
            "tipo_documento": forms.Select(),
            "tipo_usuario": forms.Select(),
        }

class LoginForm(forms.Form):
    email = forms.EmailField(label="Correo electrónico")
    password = forms.CharField(widget=forms.PasswordInput)
    tipo_usuario = forms.ChoiceField(choices=TIPO_USUARIO)

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get("email")
        password = cleaned_data.get("password")
        tipo_usuario = cleaned_data.get("tipo_usuario")

        if email and password and tipo_usuario:
            try:
                user = Usuario.objects.get(email=email, tipo_usuario=tipo_usuario)
            except Usuario.DoesNotExist:
                raise forms.ValidationError("Correo, contraseña o tipo de usuario incorrectos.")

            self.user = authenticate(username=email, password=password)

            if self.user is None:
                raise forms.ValidationError("Correo, contraseña o tipo de usuario incorrectos.")
        return cleaned_data

    def get_user(self):
        return getattr(self, "user", None)
