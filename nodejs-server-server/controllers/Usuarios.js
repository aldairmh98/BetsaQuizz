'use strict';

var utils = require('../utils/writer.js');
var Usuarios = require('../service/UsuariosService');

module.exports.actualizaUsuario = function actualizaUsuario (req, res, next) {
  var usuario = req.swagger.params['usuario'].value;
  var id_usuario = req.swagger.params['id_usuario'].value;
  Usuarios.actualizaUsuario(usuario,id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscaUsuario = function buscaUsuario (req, res, next) {
  var id = req.swagger.params['id'].value;
  Usuarios.buscaUsuario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.crearUsuario = function crearUsuario (req, res, next) {
  var usuario = req.swagger.params['usuario'].value;
  Usuarios.crearUsuario(usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUsuario = function deleteUsuario (req, res, next) {
  var id = req.swagger.params['id'].value;
  Usuarios.deleteUsuario(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  Usuarios.login(username,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
