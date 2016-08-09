$(document).ready(function () {

	/*$("body").on('click', '#btn-ingresar', function(e){
		$.mobile.changePage("#venta", { transition: "slide"});
	});*/
	
	var al = $(window).height();
	var an = $(window).width();

	inicializa();

	function inicializa()
	{
		crearFormularioIndex();
		$("#inicio").css({ height: al+'px', property2: an+'px'});
		//$(".button-collapse").sideNav();
	}

	function crearFormularioIndex()
	{
		var script = "<div class='input-field col s12'>";
            script += "<input placeholder='Usuario' id='mail' type='email' class='validate primary-text-color'>";
            script += "<label for='mail'>Usuario</label>";
            script += "</div>";
            script += "<div class='input-field col s12'>";
            script += "<input id='clave' type='password' class='validate primary-text-color'>",
            script += "<label for='clave'>Contraseña</label>";
            script += "</div>";
            script += "<div class='col s12' style='font-size:12px;''>";
            script += "<a href='#primero' class='waves-effect waves-light btn col s12 '>INICIAR SESIÓN</a>";
            script += "</div>";
         $("#cont-login").append(script);
	}

});