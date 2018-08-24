'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _questionRoute = require('./routes/questionRoute');

var _questionRoute2 = _interopRequireDefault(_questionRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = parseInt(process.env.PORT, 10) || 8000;
var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.json());

app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/api/v1/', _questionRoute2.default);

app.set('port', port);

app.listen(port, function () {
  return console.log('server running at port', port);
});

exports.default = app;