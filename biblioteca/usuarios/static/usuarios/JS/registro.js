document.getElementById("registroForm").addEventListener("submit", function(e) {
    // Validación de frontend
    const password1 = document.getElementById("id_password1").value;
    const password2 = document.getElementById("id_password2").value;

    if (password1 !== password2) {
        e.preventDefault(); // Evita enviar el formulario
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Puedes agregar más validaciones si quieres, por ejemplo:
    const nombre = document.getElementById("id_nombre_completo").value;
    if (nombre.length < 3) {
        e.preventDefault();
        alert("El nombre completo debe tener al menos 3 caracteres.");
        return;
    }

    // Si pasa todas las validaciones, el formulario se envía normalmente
});
