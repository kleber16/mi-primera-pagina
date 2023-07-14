function validarFormulario() {
	var nombre = document.getElementById("nombre").value;
	var correo = document.getElementById("correo").value;
	var telefono = document.getElementById("telefono").value;
	var mensaje = document.getElementById("mensaje").value;

	if (nombre == "" || correo == "" || telefono == "" || mensaje == "") {
		alert("Por favor, complete todos los campos.");
		return false;
	}

	alert("¡Muchas gracias por completar el formulario!");
	return true;
}
