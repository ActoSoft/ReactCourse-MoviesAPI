const Errors = {
	validator: {
    notExist: 'El validador no existe',
    badRequest: 'El cuerpo de la petición no es el esperado',
    invalidId: 'El identificador enviado no coincide'
	},
	movie: {
		failedGetAll: 'Algo falló al consultar los clientes',
		failedGetOne: 'Algo falló al consultar la información de la película seleccionada',
		failedCreate: 'No se pudo crear la película',
		failedUpdate: 'No se pudo actualizar la película',
		failedDelete: 'No se pudo borrar la película'
	},
	character: {
		failedGetAll: 'Algo falló al consultar los personajes',
		failedCreate: 'No se pudo crear el personaje',
		failedUpdate: 'No se pudo actualizar el personaje',
		failedDelete: 'No se pudo borrar el personaje'
	},
};

module.exports = Errors;
