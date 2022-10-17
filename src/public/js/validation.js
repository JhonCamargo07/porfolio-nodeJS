(function () {
	const form = document.getElementById('form');
	const inputs = document.querySelectorAll('#form input, textarea');

	const expressions = {
		name: /^[a-zA-ZÀ-ÿ\s]{7,60}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		motive: /^[a-zA-ZÀ-ÿ0-9_.\',+-\s/¿?!:@?()\uD800-\uDBFF\u2702-\u27B0\uF680-\uF6C0\u24C2-\uF251]{10,100}$/,
		message: /^[a-zA-ZÀ-ÿ0-9_.\',+-\s$%/¿?¡!:@?()\uD800-\uDBFF\u2702-\u27B0\uF680-\uF6C0\u24C2-\uF251]{10,1300}$/,
	};

	const fields = {
		name: false,
		email: false,
		motive: false,
		message: false,
	};

	const validateForm = (e) => {
		switch (e.target.name) {
			case 'name':
				validateField(expressions.name, e.target, 'name');
				break;

			case 'email':
				validateField(expressions.email, e.target, 'email');
				break;

			case 'motive':
				validateField(expressions.motive, e.target, 'motive');
				break;

			case 'message':
				validateField(expressions.message, e.target, 'message');
				break;
			default:
				console.log('No case');
		}
	};

	const validateField = (expresion, input, field) => {
		if (expresion.test(input.value)) {
			correctInput(field);
			fields[field] = true;
		} else {
			incorrectInput(field);
			fields[field] = false;
		}
	};

	const correctInput = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
		document
			.querySelector(`#grupo__${nameInput} .formulario__input-error`)
			.classList.remove('formulario__input-error-activo');
	};

	const incorrectInput = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${nameInput} .formulario__input-error`).classList.add('formulario__input-error-activo');
	};

	const clearInput = (nameInput) => {
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${nameInput}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${nameInput} i`).classList.remove('fa-check-circle');
		document
			.querySelector(`#grupo__${nameInput} .formulario__input-error`)
			.classList.remove('formulario__input-error-activo');
		document.getElementById(nameInput).value = '';
		fields[nameInput] = false;
	};

	// Validar cada input
	inputs.forEach((input) => {
		input.addEventListener('blur', validateForm);
	});

	// Validar formulario al enviarlo
	form.addEventListener('submit', async function (e) {
		e.preventDefault();
		if (!fields.name || !fields.email || !fields.motive || !fields.message) {
			document.getElementById('formulario__mensaje').style.display = 'block';
			inputs.forEach((input) => {
				if (input.value == '') {
					incorrectInput(input.name);
				}
			});
			return false;
		} else {
			e.target.btnform.value = 'Sending';
			document.getElementById('formulario__mensaje').style.display = 'none';

			const serviceID = 'default_service',
				templateID = 'template_wzkwk2i';

			// Enviar correo
			await emailjs.sendForm(serviceID, templateID, this).then(
				() => {
					e.target.btnform.value = 'Send email';

					// Clear form
					document.getElementById('messageSuccessful').innerHTML = '&#161;Form successfully submitted!';
					setTimeout(() => {
						document.getElementById('messageSuccessful').innerHTML = '';
					}, 5000);

					document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
						icono.classList.remove('formulario__grupo-correcto');
					});

					clearInput('name');
					clearInput('email');
					clearInput('motive');
					clearInput('message');
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
		}
	});
})();
