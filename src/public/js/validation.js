const sendEmail = async (data) => {
	// await axios.post('https://jhoncamargo.000webhostapp.com/controller/correo.php', data).then((resp) => {
	// 	console.log(resp);
	// 	// if (resp.data.success) {
	// 	// 	setEmailSendSuccessfully(true);
	// 	// } else {
	// 	// 	setEmailSendSuccessfully(false);
	// 	// }
	// });
	// return new Promise(function (resolve, reject) {
	// fetch('https://jhoncamargo.000webhostapp.com/controller/correo.php', data).then((response) => {
	// 	console.log(response);
	// });
	// });
};

(function () {
	const formulario = document.getElementById('form');
	const inputs = document.querySelectorAll('#form input, textarea');
	const form = document.getElementById('form');

	const expresiones = {
		name: /^[a-zA-ZÀ-ÿ\s]{7,60}$/, // Letras y espacios, pueden llevar acentos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		motive: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?]{10,100}$/,
		message: /^[a-zA-ZÀ-ÿ0-9_.,+-\s/¿?!:@?]{10,1300}$/,
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
				console('No case');
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

	// const inputMsgCorrecto = () => {
	// 	document.getElementById('grupo__message').classList.remove('formulario__grupo-textarea-incorrecto');
	// 	document.getElementById('grupo__message').classList.add('formulario__grupo-textarea-correcto');
	// 	document.querySelector('#grupo__message i').classList.add('fa-check-circle');
	// 	document.querySelector('#grupo__message i').classList.remove('fa-times-circle');
	// 	document.querySelector('#grupo__message .formulario__input-error').classList.remove('formulario__input-error-activo');
	// };

	// const inputMsgIncorrecto = () => {
	// 	document.getElementById('grupo__message').classList.add('formulario__grupo-textarea-incorrecto');
	// 	document.getElementById('grupo__message').classList.remove('formulario__grupo-textarea-correcto');
	// 	document.querySelector('#grupo__message i').classList.add('fa-times-circle');
	// 	document.querySelector('#grupo__message i').classList.remove('fa-check-circle');
	// 	document.querySelector('#grupo__message .formulario__input-error').classList.add('formulario__input-error-activo');
	// };

	inputs.forEach((input) => {
		input.addEventListener('keyup', validarFormulario);
		input.addEventListener('blur', validarFormulario);
	});

	formulario.addEventListener('submit', (e) => {
		e.preventDefault();
		// console.log(e.target.name.value);
		if (campos.name && campos.email && campos.motive && campos.message) {
			// document.getElementById('formulario__message').classList.remove('formulario__mensaje-activo');
			// document.getElementById('grupo__message').classList.remove('formulario__grupo-textarea-correcto');
			// document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

			// setTimeout(() => {
			// 	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
			// }, 5000);

			// document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			// 	icono.classList.remove('formulario__grupo-correcto');
			// });

			// campos[nombre] = false;
			// campos[correo] = false;
			// campos[asunto] = false;
			// campos[mensaje] = false;

			const data = {
				name: e.target.name.value,
				email: e.target.email.value,
				motive: e.target.motive.value,
				message: e.target.message.value,
			};

			console.log('Respuesta: ', sendEmail(data));
		} else {
			inputs.forEach((input) => {
				if (input.value == '') {
					inputIncorrecto(input.name);
				}
			});
		}
	});
})();
