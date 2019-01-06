'use strict';
var _ = require('lodash');
var UsuarioRepo = require('../repository/UsuariosRepository');

/**
 * Aquí son modificaciones generales, nombre de usuario, descripcion e email
 *
 * usuario UsuarioPerfil Usuario que se va a guardar
 * id_usuario String  (optional)
 * no response value expected for this operation
 **/
exports.actualizaUsuario = function(usuario,id_usuario) {
  return UsuarioRepo.updateUser(id_usuario, usuario);
}

exports.deleteUsuario = function(id_usuario) {
  return UsuarioRepo.deleteUser(id_usuario);
}

/**
 * Busca a un solo usuario
 *
 * id Integer 
 * returns UsuarioPerfil
 **/
exports.buscaUsuario = function(id) {
  return UsuarioRepo.getOne(id);
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "memes" : [ {
    "meme" : "meme",
    "description" : "description",
    "usuario" : null,
    "id" : 6
  }, {
    "meme" : "meme",
    "description" : "description",
    "usuario" : null,
    "id" : 6
  } ],
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
 * Busca usuarios por like
 *
 * dato String 
 * returns List
 **/
exports.buscaUsuarios = function(dato) {
  return UsuarioRepo.getMany(dato);
}


/**
 * Registro de los usuarios
 *
 * usuario UsuarioRegistro Usuario que se va a registrar
 * no response value expected for this operation
 **/
exports.crearUsuario = function(usuario) {
  return UsuarioRepo.crearUsuario(usuario);
}


/**
 *
 * username String 
 * password String 
 * returns UsuarioPerfil
 **/
exports.login = function(username,password) {
  return UsuarioRepo.login(username, password);
}