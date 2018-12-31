'use strict';

var utils = require('../utils/writer.js');
var Quizz = require('../service/QuizzService');

module.exports.getQuizz = function getQuizz(req, res, next) {
  Quizz.getQuizz()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
