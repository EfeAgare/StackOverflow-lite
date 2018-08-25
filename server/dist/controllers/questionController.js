'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _questions = require('../models/questions');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles question controllers
 * */
var QuestionController = function () {
  function QuestionController() {
    _classCallCheck(this, QuestionController);
  }

  _createClass(QuestionController, null, [{
    key: 'getAllQuestions',

    /**
     * This method get all questions.
     * @param {array} req -
     * @param {array} res -
     * @returns {array} request
     */
    value: function getAllQuestions(req, res) {
      res.status(200).json(_questions2.default);
    }

    /**
    * This method gets a particulat question on request
    *
    * @param {object} req -
    * @param {object} res -
    * @returns {object} request
    */

  }, {
    key: 'getAQuestion',
    value: function getAQuestion(req, res) {
      var id = parseInt(req.params.questionId, 10);
      var result = _questions2.default.filter(function (question) {
        return question.id === id;
      });

      res.status(200).json(result);
    }

    /**
      * This method add questions to the to the list of questions
      * @param {object} req -
      * @param {object} res -
      * @returns {object} request
      */

  }, {
    key: 'addQuestions',
    value: function addQuestions(req, res) {
      var newQuestion = {
        title: req.body.title,
        questionBody: req.body.questionBody,
        answer: req.body.answer,
        id: _questions2.default[_questions2.default.length - 1].id + 1
      };
      if (!newQuestion) {
        return res.sendStatus(200);
      }
      _questions2.default.push(newQuestion);
      return res.status(200).json({ data: newQuestion });
    }

    /**
     * This method add answers for a particular question
     * @param  {object} req -
     * @param {object} res -
     * @returns {array} request
     */

  }, {
    key: 'addAnswer',
    value: function addAnswer(req, res) {
      var questionId = parseInt(req.params.questionId, 10);
      var question = _questions2.default.filter(function (question) {
        return question.id === questionId;
      });
      question[0].answers.push(req.body.answer);

      res.status(200).json(question);
    }
  }]);

  return QuestionController;
}();

exports.default = QuestionController;