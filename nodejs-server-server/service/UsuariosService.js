'use strict';


/**
 * Aquí son modificaciones generales, nombre de usuario, descripcion e email
 *
 * usuario UsuarioPerfil Usuario que se va a registrar
 * id_usuario String  (optional)
 * no response value expected for this operation
 **/
exports.actualizaUsuario = function(usuario,id_usuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Busca a un solo usuario
 *
 * id Integer 
 * returns UsuarioPerfil
 **/
exports.buscaUsuario = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registro de los usuarios
 *
 * usuario UsuarioRegistro Usuario que se va a registrar
 * no response value expected for this operation
 **/
exports.crearUsuario = function(usuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Aquí se elimina el usuario
 *
 * id String  (optional)
 * no response value expected for this operation
 **/
exports.deleteUsuario = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * username String 
 * password String 
 * returns UsuarioPerfil
 **/
exports.login = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "email" : "email",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

