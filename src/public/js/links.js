(function () {
	const enlace_sobre_mi = document.getElementById('btn-about'),
		enlace_habilidades = document.getElementById('btn-skills'),
		enlace_contacto = document.getElementById('btn-contact'),
		linkContactFooter = document.getElementById('linkContactFooter');

	const goToSection = (nameSection) => {
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
		goToSection('aboutme');
	});
	enlace_habilidades.addEventListener('click', () => {
		goToSection('skills');
	});
	enlace_contacto.addEventListener('click', () => {
		goToSection('form');
	});

	linkContactFooter.addEventListener('click', () => {
		goToSection('form');
	});
})();
