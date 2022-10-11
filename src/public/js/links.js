(function () {
	const enlace_sobre_mi = document.getElementById('btn-about'),
		enlace_habilidades = document.getElementById('btn-skills'),
		enlace_contacto = document.getElementById('btn-contact');

	var direccionEnlaces = (nameSection) => {
		const aboutPosition = document.getElementById('information').offsetTop;
		const skillsPosition = document.getElementById('skills').offsetTop;
		const formPosition = document.getElementById('form').offsetTop;
		const headerHeight = document.getElementById('header').offsetHeight;
		let position = 0;
		switch (nameSection) {
			case 'aboutme':
				position = aboutPosition;
				break;
			case 'skills':
				position = skillsPosition;
				break;
			case 'form':
				position = formPosition - headerHeight;
				break;
			default:
				position = 0;
		}
		window.scrollTo({
			top: position - headerHeight,
			behavior: 'smooth',
		});
	};
	enlace_sobre_mi.addEventListener('click', () => {
		direccionEnlaces('aboutme');
	});
	enlace_habilidades.addEventListener('click', () => {
		direccionEnlaces('skills');
	});
	enlace_contacto.addEventListener('click', () => {
		direccionEnlaces('form');
	});
})();
