(function () {
	function navegador() {
		var agente = navigator.userAgent;
		var navegadores = ['Chrome', 'Firefox', 'Safari', 'Opera', 'Trident', 'MSIE', 'Edge'];

		for (var i in navegadores) {
			if (agente.indexOf(navegadores[i]) != -1) return navegadores[i];
		}
	}

	navegador();

	var browser = navegador();
	if (browser == 'Trident') {
		alert(
			'¿Estás en Internet Explorer? Este navegador no es compatible con la página, intenta usar otro como Firefox, Chrome o cualquier otro.'
		);
		var IE = document.getElementById('error__ie');

		IE.innerHTML =
			'Si estás en Internet Explorer, intenta usar otro navegador como Firefox, Chrome o cualquier otro, ya que Internet Explorer NO es compatible con la página. Esto sucede porque Internet Explorer no soporta las nuevas tecnologías.';
		IE.classList.add('error__ie');
	}
})();
