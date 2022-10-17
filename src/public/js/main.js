(function () {
	const btnGoToUp = document.getElementById('goToUp');
	//* =================================================== *//
	//!=================== Go to up ================== !/
	//* =================================================== *//

	window.onscroll = () => {
		if (document.documentElement.scrollTop > 300) {
			btnGoToUp.classList.remove('icono__none');
			btnGoToUp.classList.add('icono__flex');
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

	//* =================================================== *//
	//!=================== Theme ================== !/
	//* =================================================== *//

	if (!localStorage.getItem('theme')) {
		localStorage.setItem('theme', 'dark');
	}

	const btnTheme = document.getElementById('btn-theme');

	const changeTheme = () => {
		switch (localStorage.getItem('theme')) {
			case 'dark':
				document.body.classList.add('light');
				localStorage.setItem('theme', 'light');
				break;
			case 'light':
				document.body.classList.remove('light');
				localStorage.setItem('theme', 'dark');
				break;
			default:
				document.body.classList.remove('light');
				localStorage.setItem('theme', 'dark');
				break;
		}
	};

	const stablicTheme = () => {
		switch (localStorage.getItem('theme')) {
			case 'light':
				document.body.classList.add('light');
				localStorage.setItem('theme', 'light');
				break;
			case 'dark':
				document.body.classList.remove('light');
				localStorage.setItem('theme', 'dark');
				break;
			default:
				document.body.classList.remove('light');
				localStorage.setItem('theme', 'dark');
				break;
		}
	};

	window.onload = () => {
		stablicTheme();
	};

	document.getElementById('btn-theme').addEventListener('click', () => {
		changeTheme();
	});

	document.oncontextmenu = () => {
		return false;
	};
})();
