'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _questionController = require('../controllers/questionController');

var _questionController2 = _interopRequireDefault(_questionController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionRoute = (0, _express2.default)();

questionRoute.route('/questions').get(_questionController2.default.getAllQuestions).post(_questionController2.default.addQuestions);

questionRoute.route('/questions/:questionId').get(_questionController2.default.getAQuestion);

questionRoute.route('/questions/:questionId/answers').post(_questionController2.default.addAnswer);

module.exports = questionRoute;