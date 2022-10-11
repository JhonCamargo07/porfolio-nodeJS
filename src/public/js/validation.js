(function () {
	const formulario = document.getElementById('form');
	const inputs = document.querySelectorAll('#form input, textarea');
	const form = document.getElementById('form');

	const expresiones = {
		message: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?]{10,1300}$/,
		name: /^[a-zA-ZÀ-ÿ\s]{7,60}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		motive: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?\uD800-\uDBFF\u2702-\u27B0\uF680-\uF6C0\u24C2-\uF251]{10,100}$/,
		message: /^[a-zA-ZÀ-ÿ0-9_.,+-\s$%/¿?¡!:@?\uD800-\uDBFF\u2702-\u27B0\uF680-\uF6C0\u24C2-\uF251]{10,1300}$/,
	};

	const campos = {
		name: false,
		email: false,
		motive: false,
		message: false,
	};

	const validarFormulario = (e) => {
		switch (e.target.name) {
			case 'name':
				validarCampo(expresiones.name, e.target, 'name');
				break;

			case 'email':
				validarCampo(expresiones.email, e.target, 'email');
				break;

			case 'motive':
				validarCampo(expresiones.motive, e.target, 'motive');
				break;

			case 'message':
				validarCampo(expresiones.message, e.target, 'message');
				break;
			default:
				console.log('No case');
		}
	};

	const validarCampo = (expresion, input, campo) => {
		if (expresion.test(input.value)) {
			inputCorrecto(campo);
			campos[campo] = true;
		} else {
			inputIncorrecto(campo);
			campos[campo] = false;
		}
	};

	const inputCorrecto = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
		document
			.querySelector(`#grupo__${nameInput} .formulario__input-error`)
			.classList.remove('formulario__input-error-activo');
	};

	const inputIncorrecto = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${nameInput} .formulario__input-error`).classList.add('formulario__input-error-activo');
	};

	const clearInputs = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
		document
			.querySelector(`#grupo__${nameInput} .formulario__input-error`)
			.classList.remove('formulario__input-error-activo');
		document.getElementById(nameInput).value = '';
	};

	// Validar cada input
	inputs.forEach((input) => {
		input.addEventListener('blur', validarFormulario);
	});

	// Validar formulario al enviarlo
	formulario.addEventListener('submit', function (e) {
		e.preventDefault();
		if (campos.name && campos.email && campos.motive && campos.message) {
			e.target.btnform.value = 'Sending';

			document.getElementById('formulario__mensaje').style.display = 'none';

			const serviceID = 'default_service';
			const templateID = 'template_wzkwk2i';

			// Enviar correo
			emailjs.sendForm(serviceID, templateID, this).then(
				() => {
					e.target.btnform.value = 'Send email';

					// Clear form
					document.getElementById('messageSuccessful').innerHTML = '&#161;Form successfully submitted!';
					setTimeout(() => {
						document.getElementById('messageSuccessful').innerHTML = '';
					}, 5000);

					clearInputs('name');
					clearInputs('email');
					clearInputs('motive');
					clearInputs('message');

					document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
						icono.classList.remove('formulario__grupo-correcto');
					});

					campos[name] = false;
					campos[motive] = false;
					campos[motive] = false;
					campos[message] = false;
				},
				(err) => {
					// Show error message
					document.getElementById('messageError').innerHTML = 'A problem has occurred, our site is experiencing errors';
					setTimeout(() => {
						document.getElementById('messageError').innerHTML = '';
					}, 5000);
					e.target.btnform.value = 'Send email';
				}
			);
		} else {
			document.getElementById('formulario__mensaje').style.display = 'block';
			inputs.forEach((input) => {
				if (input.value == '') {
					inputIncorrecto(input.name);
				}
			});
		}
	});
})();
