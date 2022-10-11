(function () {
	const btnGoToUp = document.getElementById('goToUp');
	//* =================================================== *//
	//!=================== Go to up ================== !/
	//* =================================================== *//

	window.onscroll = () => {
		if (document.documentElement.scrollTop > 300) {
			btnGoToUp.classList.remove('icono__none');
			btnGoToUp.classList.add('icono__flex');
			// contenedorP.style.marginTop = altura - 35 + "px";
		} else {
			btnGoToUp.classList.remove('icono__flex');
			btnGoToUp.classList.add('icono__none');
		}
	};

	btnGoToUp.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	// TODO Unir los inputs de name y email
	// TODO Modo oscuro/claro
	// TODO Enviar correo con axios - mostrar respuesta del servidor
	// TODO cuadrar el color del texto de las paginas (error 404)
})();
