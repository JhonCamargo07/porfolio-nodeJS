(function () {
	const enlaces = document.getElementsByClassName('header__nav')[0];
	const hamburguesa = document.getElementsByClassName('hamburguesa')[0];
	const menuHamburguesa = document.getElementById('hamburguesa');
	let abierto = false;

	const toggleMenu = () => {
		enlaces.classList.toggle('header__nav2');
		enlaces.style.transtion = 'transform 0.5s ease-in-out all';
	};

	menuHamburguesa.addEventListener('click', function () {
		toggleMenu();
		if (document.querySelector('.header__nav.header__nav2')) {
			abierto = true;
			menuHamburguesa.classList.remove('fa-bars');
			menuHamburguesa.classList.add('fa-times');
		} else {
			abierto = false;
			menuHamburguesa.classList.add('fa-bars');
			menuHamburguesa.classList.remove('fa-times');
		}
	});

	window.addEventListener('click', function (e) {
		if (abierto) {
			if (e.target !== menuHamburguesa && e.target !== enlaces) {
				toggleMenu();
				abierto = false;
				menuHamburguesa.classList.add('fa-bars');
				menuHamburguesa.classList.remove('fa-times');
			}
		}
	});

	window.addEventListener('resize', function () {
		if (screen.width > 668) {
			if (abierto) {
				toggleMenu();
				enlaces.style.transtion = 'none';
				abierto = false;
				menuHamburguesa.classList.add('fa-bars');
				menuHamburguesa.classList.remove('fa-times');
			}
		}
	});
})();
