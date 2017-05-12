function mostrarData(){
	
	function nombre(){
		var nombreUsuario = document.getElementById("name").value
		if(nombreUsuario == " " || nombreUsuario == undefined || nombreUsuario.length == 0){
		//validar que nombre no este vacio 
		alert("Error, debe ingresar un nombre");
	}
}
nombre();

function apellido(){
	var apellidoUsuario = document.getElementById("lastName").value
	if(apellidoUsuario == " " || apellidoUsuario == undefined || apellidoUsuario.length == 0){
		alert("Error, debe ingresar un apellido");
	}
}
apellido();

function correo(){
	var verificar = true;
	var emailUsuario = document.getElementById("email");
	if( !email.value) {
		alert("Error, debe ingresar un Correo Electrónico");
		email.focus();
		verificar = false;
	}
}
correo();

function opciones(){
	var seleccion = document.getElementsByTagName("select");
	for(var i = 0; i < seleccion.length; i++){
		// valida que el usuario elija una opcion 
		if(seleccion[i].value == "1"){
			alert("Debe escoger un tipo de Té");
		}
	}
}
opciones();

function telefono(){
	var verificar = true;
	var telefonoUsuario = document.getElementById("telefono");
	if( !telefono.value) {
		alert("Error, debe ingresar un numero de teléfono");
		telefono.focus();
		verificar = false;
	}
}
telefono();

function direccion(){
	var direccionUsuario = document.getElementById("direccion").value
	if(direccionUsuario == " " || direccionUsuario == undefined || direccionUsuario.length == 0){
		alert("Error, debe ingresar una dirección");
	}
}
direccion();
}